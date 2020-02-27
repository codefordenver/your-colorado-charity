package db

import "encoding/json"

type CharityJSON struct {
	BackgroundColor string
	ForegroundColor string
	TextColor       string
	FontColor       string
	TextFont        string
	OrgLogoTag      string
	OrgName         string
	OrgAddress      string
	OrgEmail        string
	OrgHistory      string
	OrgMission      string
}

type Charity struct {
	CharityID int
	Data      json.RawMessage
}
