import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const AddMovieFrom = ({putdatafunc,titleChange,sub_titleChange,descriptionChange,img_pathChange,first_episodeChange}) =>{
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Cím</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={titleChange}
                        placeholder="Alice Csodaországban..."
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default-2">Alcím</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default-2"
                        onChange={sub_titleChange}
                        placeholder="Alcím a Jack a bölcs sárkány sose..."
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Film leírás</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        onChange={descriptionChange}
                        placeholder="A film leírása..."
                    />
                </InputGroup>
                <br/>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default-3">Kép Url cím</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default-3"
                        onChange={img_pathChange}
                        placeholder="Egy kép url..."
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default-4">Első rész url</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default-4"
                        onChange={first_episodeChange}
                        placeholder="Az első rész url..."
                    />
                </InputGroup>
                <Button
                    onClick={putdatafunc}
                    variant="primary"
                    size="lg"
                    block
                >
                    Cím hozzáadása
                </Button>
            </div>
        )
};
export default AddMovieFrom;