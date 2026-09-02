# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3289<sub>(+230) | 3445<sub>(+173) | 3513<sub>(+191) |  |
| 0.3.0 | 2026-07-19 | 3059<sub>(+485) | 3272<sub>(+382) | 3322<sub>(+363) |  |
| 0.2.0 | 2026-06-24 | 2574<sub>(+553) | 2890<sub>(+576) | 2959<sub>(+549) |  |
| 0.1.0 | 2026-06-09 | 2021 | 2314 | 2410 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-02 04:36:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "" [2021, 2574, 3059, 3289]
  line "STC (8.0+0.08s)" [2021, 2574, 3059, 3289]
  line "LTC (60.0+0.60s)" [2314, 2890, 3272, 3445]
  line "" [2410, 2959, 3322, 3513]
  line "VLTC (2m24s+1.12s)" [2410, 2959, 3322, 3513]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 81 | 36 | 56% | 3470 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 66 | 56 | 51% | 3434 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 59 | 76 | 47% | 3306 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3322 | 27 | 360 | 53% | 3301 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 28 | 320 | 51% | 3263 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3059 | 29 | 344 | 51% | 3048 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2959 | 37 | 212 | 50% | 2948 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 32 | 296 | 47% | 2909 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2574 | 36 | 252 | 46% | 2614 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2410 | 36 | 278 | 49% | 2431 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2314 | 35 | 284 | 49% | 2322 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2021 | 37 | 266 | 48% | 2036 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |