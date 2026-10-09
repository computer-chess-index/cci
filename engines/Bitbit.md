# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2827 | 3131 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 3077 | 3370 | 3455 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2954<sub>(+42) | 3205<sub>(+54) | 3274<sub>(+58) |  |
| 1.6 | 2025-10-18 | 2912 | 3151 | 3216 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bitbit+<version>&body=###%20Engine%20name%0ABitbit%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:09:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2912, 2954]
  line "STC (8.0+0.08s)" [2912, 2954]
  line "LTC (60.0+0.60s)" [3151, 3205]
  line "" [3216, 3274]
  line "VLTC (2m24s+1.12s)" [3216, 3274]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3208 | 30 | 288 | 48% | 3220 | 60% |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 27 | 358 | 50% | 3278 | 65% |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3455 | 38 | 184 | 49% | 3464 | 63% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3205 | 28 | 332 | 49% | 3210 | 61% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 37 | 192 | 49% | 3380 | 61% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 32 | 272 | 49% | 3143 | 51% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2954 | 28 | 372 | 51% | 2948 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 3077 | 41 | 186 | 48% | 3097 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2827 | 34 | 276 | 45% | 2877 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 24 | 478 | 52% | 3191 | 54% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 24 | 510 | 52% | 3123 | 52% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2912 | 21 | 692 | 50% | 2900 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |