package db

import "encoding/json"

type CharityJSON struct {
	BackgroundColor string `json:"BackgroundColor"`
	ForegroundColor string `json:"ForegroundColor"`
	TextColor       string `json:"TextColor"`
	FontColor       string `json:"FontColor"`
	TextFont        string `json:"TextFont"`
	OrgLogoTag      string `json:"OrgLogoTag"`
	OrgName         string `json:"OrgName"`
	OrgAddress      string `json:"OrgAddress"`
	OrgEmail        string `json:"OrgEmail"`
	OrgHistory      string `json:"OrgHistory"`
	OrgMission      string `json:"OrgMission"`
}

type Charity struct {
	CharityID int             `json:CharityID`
	Data      json.RawMessage `json:Data`
}

type CharitiesList struct {
	Charities []Charity
}

func (char *CharitiesList) AddCharity(charity Charity) []Charity {
	char.Charities = append(char.Charities, charity)
	return char.Charities
}
