package com.cts.lmaApp.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(as=TYPE.class)
public enum TYPE {
    PL,
    CL,
    SK;


     TYPE(){}
}
