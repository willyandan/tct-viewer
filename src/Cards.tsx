import ReactDiffViewer from 'react-diff-viewer-continued';
import { Block } from './block';
export const Cards = ({ blocks }: { blocks: Array<Block> }) => {
    if (blocks.length < 1) {
        return <></>
    }
    const [_, ...restBlocks] = blocks
    return <>
        {
            restBlocks.map((block, i) => <>

                <div className='card'>

                    <ReactDiffViewer oldValue={blocks[i].payload.content} newValue={block.payload.content} splitView={false} useDarkTheme={true} />
                    <p>
                        <small>Data: {new Date(block.payload.date).toLocaleDateString()}</small><br />
                        <small>Verificado</small><br />
                        {block.payload.hasPasteContent && <small>Origem: {block.payload.pasteContentOrigin || 'Origem desconhecida'}</small>}

                    </p>
                    <hr />
                </div>
            </>)
        }
    </>

}