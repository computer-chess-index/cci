# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2851 | 3092 | 3144 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 3021 | 3306 | 3379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2873<sub>(+29) | 3105<sub>(+19) | 3177<sub>(+54) |  |
| 0.21.0 | 2025-10-13 | 2844 | 3086 | 3123 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:14:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "" [2844, 2873]
  line "STC (8.0+0.08s)" [2844, 2873]
  line "LTC (60.0+0.60s)" [3086, 3105]
  line "" [3123, 3177]
  line "VLTC (2m24s+1.12s)" [3123, 3177]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3144 | 34 | 248 | 52% | 3128 | 52% |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 33 | 256 | 50% | 3174 | 56% |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 36 | 218 | 50% | 3380 | 55% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3092 | 35 | 234 | 54% | 3059 | 49% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3105 | 30 | 308 | 50% | 3106 | 54% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3306 | 38 | 194 | 50% | 3312 | 53% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2873 | 32 | 296 | 49% | 2885 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 3021 | 38 | 208 | 50% | 3019 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2851 | 34 | 258 | 50% | 2847 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 24 | 504 | 50% | 3124 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3086 | 23 | 542 | 50% | 3082 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2844 | 21 | 728 | 51% | 2834 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |