# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 582<sub>(+161) | 585<sub>(+146) | 576<sub>(+128) |  |
| 0.2 | 2026-08-07 | 421 | 439 | 448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Magpie+<version>&body=###%20Engine%20name%0AMagpie%0A%0A###%20Version%0A0.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:39:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 600
  line "" [421, 582]
  line "STC (8.0+0.08s)" [421, 582]
  line "LTC (60.0+0.60s)" [439, 585]
  line "" [448, 576]
  line "VLTC (2m24s+1.12s)" [448, 576]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 576 | 44 | 200 | 49% | 590 | 22% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 585 | 44 | 204 | 50% | 575 | 25% |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 582 | 44 | 216 | 46% | 652 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 448 | 45 | 208 | 35% | 686 | 35% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 439 | 46 | 192 | 36% | 644 | 38% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 421 | 46 | 188 | 37% | 597 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |