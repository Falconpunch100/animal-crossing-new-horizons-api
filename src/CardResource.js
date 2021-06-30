import { Card, Icon, Modal, Button, Transition } from 'semantic-ui-react'
import { useState, useEffect, useContext } from "react"
import { getDate, capitalizeWords } from "./utils.js"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BottombarContext from './context/bottombar.js'

function CardResource({ resource }) {
    let [open, setOpen] = useState(false)
    let [trans, setTrans] = useState(false)
    const { items, setItems } = useContext(BottombarContext)
    useEffect(() => {
        setTrans(true)
    }, [])
    return (
        <>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header>{capitalizeWords(resource?.name["name-USen"])}</Modal.Header>
                <Modal.Content image>
                    <LazyLoadImage src={resource?.image_uri} alt={resource?.name} />
                    <Modal.Description className="resourceDesc">
                        {resource?.["buy-price"] && <p className='date'>Buy Price: {resource?.price || resource?.["buy-price"]} {" "}<Icon name="star" /></p>}
                        <p className='date'>Sell Price: {resource?.price || resource?.["sell-price"]} {" "}<Icon name="star" /></p>
                        {resource?.["museum-phrase"] ? <p><Icon name="earlybirds" /><b>Blathers:</b> {resource?.["museum-phrase"]}</p> : <p><Icon name="picture" /><b>Description:</b> {resource?.["museum-desc"]}</p>}
                        {resource?.["catch-phrase"] && <p><Icon name="info" /><b>Phrase when caught:</b> {resource?.["catch-phrase"]}</p>}
                        {resource?.["availability"] && <p><Icon name="calendar alternate outline" /><b>Availablity (Northern Hemisphere):</b> {resource?.availability !== undefined && getDate(resource.availability["month-array-northern"])}</p>}
                        {resource?.["availability"] && <p><Icon name="calendar alternate outline" /><b>Availablity (Southern Hemisphere):</b> {resource?.availability !== undefined && getDate(resource.availability["month-array-southern"])}</p>}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        X
          </Button>
                </Modal.Actions>
            </Modal>
            <Transition animation={"fade in"} duration={500} visible={trans}>
                <Card className="card" id={resource?.name["name-USen"]} onClick={() => {
                    setOpen(true)
                }}>
                    <LazyLoadImage src={resource?.icon_uri || resource?.image_uri} className="imageCard" alt={resource?.name} />
                    <Card.Content>
                        <Card.Header>{capitalizeWords(resource?.name["name-USen"])}</Card.Header>
                        <Card.Meta>
                            {resource?.["buy-price"] && <p className='date'>Buy Price: {resource?.price || resource?.["buy-price"]} {" "}<Icon name="star" /></p>}
                            <p className='date'>Sell Price: {resource?.price || resource?.["sell-price"]} {" "}<Icon name="star" /></p>
                        </Card.Meta>
                        <Card.Meta>
                            {resource?.availablity?.rarity !== undefined ?
                                <span className='date'>Rarity: {resource?.availability?.rarity} {" "}<Icon name="diamond" /></span>
                                : null}

                        </Card.Meta>
                        <Card.Description>
                            {resource?.["catch-phrase"]}
                        </Card.Description>
                    </Card.Content>
                    {resource?.availablity !== undefined ?
                        <Card.Content extra>
                            <Icon name="calendar alternate outline" />
                              Availablity: {resource?.availability !== undefined && getDate(resource?.availability["month-array-northern"])}
                        </Card.Content>
                        : null}
                    <Card.Content extra>
                        <Button onClick={e => {
                            e.stopPropagation()
                            const copy = items.slice()
                            copy.push(resource)
                            setItems(copy)
                        }} style={{backgroundColor: "lightgreen"}}>Add To My List</Button>
                    </Card.Content>
                </Card>
            </Transition>
        </>
    )
}

export default CardResource