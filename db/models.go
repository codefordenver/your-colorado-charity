package db

type CharityJSON struct {
	CharityID       int64
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
	Data      string
}
