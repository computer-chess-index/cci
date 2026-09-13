# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3283<sub>(+12) | 3452<sub>(+5) | 3476<sub>(0) |  |
| 8.1.0 | 2024-10-28 | 3271<sub>(+26) | 3447<sub>(+19) | 3476<sub>(-2) |  |
| 8.0.0 | 2024-08-17 | 3245 | 3428 | 3478 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-13 04:43:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3245, 3271, 3283]
  line "STC (8.0+0.08s)" [3245, 3271, 3283]
  line "LTC (60.0+0.60s)" [3428, 3447, 3452]
  line "" [3478, 3476, 3476]
  line "VLTC (2m24s+1.12s)" [3478, 3476, 3476]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 12 | 1704 | 50% | 3476 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 12 | 1772 | 51% | 3448 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3283 | 12 | 1820 | 50% | 3287 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 32 | 228 | 46% | 3505 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 38 | 172 | 51% | 3437 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3271 | 36 | 208 | 48% | 3286 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 33 | 228 | 49% | 3484 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3428 | 36 | 192 | 51% | 3418 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3245 | 29 | 308 | 50% | 3247 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |