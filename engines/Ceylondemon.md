# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2990<sub>(+355) | 3232<sub>(+181) | 3299<sub>(+163) |  |
| 2.0 | 2026-08-28 | 2635 | 3051 | 3136 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ceylondemon+<version>&body=###%20Engine%20name%0ACeylondemon%0A%0A###%20Version%0A3.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:36:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2635, 2990]
  line "STC (8.0+0.08s)" [2635, 2990]
  line "LTC (60.0+0.60s)" [3051, 3232]
  line "" [3136, 3299]
  line "VLTC (2m24s+1.12s)" [3136, 3299]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3299 | 35 | 216 | 52% | 3281 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3232 | 38 | 188 | 52% | 3214 | 57% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2990 | 46 | 146 | 55% | 2943 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3136 | 29 | 360 | 54% | 3094 | 49% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3051 | 31 | 312 | 52% | 3024 | 48% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2635 | 31 | 348 | 48% | 2649 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |