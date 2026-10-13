# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2024-08-10 | 3048 | 3347 | 3414 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2024-08-10 | 3289 | 3559 | 3600 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3386<sub>(+186) | 3532<sub>(+121) | 3559<sub>(+107) |  |
| 6.0 | 2024-08-10 | 3200 | 3411 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Devre+<version>&body=###%20Engine%20name%0ADevre%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-13 04:37:55

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3200, 3386]
  line "T1: LTC (60.0+0.60s)" [3411, 3532]
  line "T1: VLTC (2m24s+1.12s)" [3452, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 30 | 258 | 51% | 3545 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 26 | 346 | 51% | 3511 | 81% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3386 | 26 | 378 | 54% | 3339 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 30 | 276 | 50% | 3418 | 72% |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3452 | 32 | 244 | 49% | 3456 | 76% |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3600 | 40 | 152 | 49% | 3606 | 74% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 30 | 286 | 50% | 3411 | 71% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 39 | 160 | 51% | 3549 | 75% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3347 | 31 | 266 | 47% | 3372 | 73% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3200 | 32 | 268 | 48% | 3213 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 35 | 214 | 47% | 3309 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3048 | 31 | 300 | 42% | 3112 | 54% |
| --- | --- | --- | --- | --- | --- | --- | --- |