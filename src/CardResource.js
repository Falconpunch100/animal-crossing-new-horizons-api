import { Card, Icon, Image, Modal, Button, Transition } from 'semantic-ui-react'
import { useState, useEffect } from "react"
import { getDate, capitalizeWords } from "./utils.js"

function CardResource({ resource }) {
    let [open, setOpen] = useState(false)
    let [trans, setTrans] = useState(false)
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
                    <Image size='massive' src={resource?.image_uri} wrapped />
                    <Modal.Description>
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
                <Card className="card" onClick={() => {
                    setOpen(true)
                }}>
                    <Image src={resource?.icon_uri || resource?.image_uri} wrapped ui={false} className="imageCard" />
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

                </Card>
            </Transition>
        </>
    )
}

export default CardResource