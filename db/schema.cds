entity Sample2 {
    key id: Integer;
    anotherColumn: String
}

entity Sample3 {
    key id: Integer;
    anotherColumn: String
}


@cds.persistence.exists 
Entity ![SAMPLE] {
key     ![ID]: Integer  @title: 'ID' ; 
        ![ANOTHERCOLUMN]: String(5000)  @title: 'ANOTHERCOLUMN' ; 
}