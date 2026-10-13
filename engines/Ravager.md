# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2870<sub>(+398) | 3216<sub>(+297) | 3379<sub>(+332) |  |
| 2.0 | 2026-08-23 | 2472 | 2919 | 3047 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3205<sub>(+431) | 3362<sub>(+172) | 3548<sub>(+211) |  |
| 2.0 | 2026-08-23 | 2774 | 3190 | 3337 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:42:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2472, 2870]
  line "E1: LTC (60.0+0.60s)" [2919, 3216]
  line "E1: VLTC (2m24s+1.12s)" [3047, 3379]
  line "P1: STC (8.0+0.08s)" [2774, 3205]
  line "P1: LTC (60.0+0.60s)" [3190, 3362]
  line "P1: VLTC (2m24s+1.12s)" [3337, 3548]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 73 | 46 | 60% | 3478 | 72% |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 51 | 96 | 50% | 3366 | 71% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 70 | 52 | 60% | 3293 | 65% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3216 | 53 | 98 | 58% | 3146 | 55% |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 3205 | 76 | 48 | 63% | 3082 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 2870 | 43 | 154 | 53% | 2840 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3337 | 38 | 188 | 47% | 3362 | 55% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 31 | 280 | 42% | 3109 | 58% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3220 | 31 | 274 | 50% | 3218 | 64% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 39 | 184 | 48% | 3204 | 52% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2919 | 30 | 322 | 42% | 2982 | 56% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3109 | 30 | 302 | 50% | 3109 | 57% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2774 | 38 | 212 | 49% | 2782 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2472 | 35 | 298 | 39% | 2591 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 35 | 256 | 49% | 2761 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |