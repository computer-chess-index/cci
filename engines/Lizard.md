# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3254<sub>(+65) | 3502<sub>(+250) | 3586<sub>(+224) |  |
| 11.1.5 | 2024-12-30 | 3189 | 3252 | 3362 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3335<sub>(+334) | 3530<sub>(+515) | 3588<sub>(+584) |  |
| 11.1.5 | 2024-12-30 | 3001 | 3015 | 3004 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3314<sub>(+16) | 3495<sub>(+21) | 3529<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3298<sub>(+55) | 3474<sub>(+17) | 3518<sub>(+13) |  |
| 11.0 | 2024-09-26 | 3243<sub>(+10) | 3457<sub>(-14) | 3505<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3233 | 3471 | 3509 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:39:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.1.5", "11.2"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3189, 3254]
  line "E1: LTC (60.0+0.60s)" [3252, 3502]
  line "E1: VLTC (2m24s+1.12s)" [3362, 3586]
  line "P1: STC (8.0+0.08s)" [3001, 3335]
  line "P1: LTC (60.0+0.60s)" [3015, 3530]
  line "P1: VLTC (2m24s+1.12s)" [3004, 3588]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3233, 3243, 3298, 3314]
  line "T1: LTC (60.0+0.60s)" [3471, 3457, 3474, 3495]
  line "T1: VLTC (2m24s+1.12s)" [3509, 3505, 3518, 3529]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3588 | 37 | 172 | 52% | 3575 | 83% |
|  |  | E1 | 3586 | 31 | 240 | 51% | 3576 | 87% |
|  |  | T1 | 3529 | 12 | 1692 | 50% | 3530 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3502 | 31 | 256 | 51% | 3497 | 78% |
|  |  | T1 | 3495 | 12 | 1678 | 50% | 3494 | 82% |
|  |  | P1 | 3530 | 35 | 188 | 51% | 3524 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3254 | 25 | 424 | 46% | 3287 | 61% |
|  |  | T1 | 3314 | 12 | 1734 | 51% | 3308 | 63% |
|  |  | P1 | 3335 | 29 | 304 | 51% | 3328 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3518 | 21 | 544 | 50% | 3515 | 85% |
|  |  | P1 | 3004 | 241 | 16 | 97% | 2214 | 6% |
|  |  | E1 | 3362 | 148 | 12 | 75% | 3160 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3015 | 153 | 12 | 67% | 2812 | 50% |
|  |  | E1 | 3252 | 226 | 12 | 96% | 2765 | 8% |
|  |  | T1 | 3474 | 21 | 544 | 50% | 3475 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3001 | 127 | 16 | 66% | 2873 | 56% |
|  |  | E1 | 3189 | 164 | 16 | 75% | 2893 | 13% |
|  |  | T1 | 3298 | 22 | 552 | 49% | 3306 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3505 | 18 | 760 | 50% | 3503 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3457 | 18 | 768 | 49% | 3465 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3243 | 18 | 816 | 49% | 3245 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3509 | 31 | 252 | 52% | 3455 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3471 | 35 | 192 | 50% | 3468 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3233 | 31 | 272 | 48% | 3244 | 61% |