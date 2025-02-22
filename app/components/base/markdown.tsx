import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css'
import RemarkMath from 'remark-math'
import RemarkBreaks from 'remark-breaks'
import RehypeKatex from 'rehype-katex'
import RehypeRaw from 'rehype-raw'
import RemarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { flow } from 'lodash-es'
import ThinkBlock from '@/app/components/base/markdown-blocks/think-block'
const preprocessThinkTag = (content: string) => {
  if (!(content.trim().startsWith('<think>\n') || content.trim().startsWith('<details style=')))
    return content

  return flow([
    (str: string) => str.replaceAll('<think>\n', '<details>\n'),
    (str: string) => str.replaceAll('\n</think>', '\n[ENDTHINKFLAG]</details>'),
    (str: string) => str.replaceAll('\n</details>', '\n[ENDTHINKFLAG]</details>'),
  ])(content)
}
const preprocessLaTeX = (content: string) => {
  if (typeof content !== 'string')
    return content

  return flow([
    (str: string) => str.replace(/\\\[(.*?)\\\]/g, (_, equation) => `$$${equation}$$`),
    (str: string) => str.replace(/\\\((.*?)\\\)/g, (_, equation) => `$$${equation}$$`),
    (str: string) => str.replace(/(^|[^\\])\$(.+?)\$/g, (_, prefix, equation) => `${prefix}$${equation}$`),
  ])(content)
}

export function Markdown(props: { content: string }) {
  console.log('props.content', props.content)
  const latexContent = flow([
    preprocessThinkTag,
    preprocessLaTeX,
  ])(props.content)

  console.log('latexContent', latexContent)

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[RemarkMath, RemarkGfm, RemarkBreaks]}
        rehypePlugins={[
          RehypeKatex,
          RehypeRaw as any,
          () => {
            return (tree) => {
              const iterate = (node: any) => {
                if (node.type === 'element' && node.properties?.ref)
                  delete node.properties.ref

                if (node.children)
                  node.children.forEach(iterate)
              }
              tree.children.forEach(iterate)
            }
          },
        ]}
        components={{
          details: ThinkBlock,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return (!inline && match)
              ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={atelierHeathLight}
                  language={match[1]}
                  showLineNumbers
                  PreTag="div"
                />
              )
              : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
          },
        }}
        linkTarget={'_blank'}
      >
        {latexContent}
      </ReactMarkdown>
    </div>
  )
}
