# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-09-25 | 3135<sub>(+535) | 3343<sub>(+372) | 3457<sub>(+392) |  |
| 1.4.0 | 2026-06-05 | 2600 | 2971 | 3065 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-09-25 | 3278<sub>(+494) | 3511<sub>(+453) | 3494<sub>(+289) |  |
| 1.4.0 | 2026-06-05 | 2784 | 3058 | 3205 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-09-25 | 3197<sub>(+513) | 3395<sub>(+355) | 3422<sub>(+299) |  |
| 1.4.0 | 2026-06-05 | 2684<sub>(+186) | 3040<sub>(+216) | 3123<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2498<sub>(+365) | 2824<sub>(+382) | 2930<sub>(+403) |  |
| 1.2.0 | 2026-01-24 | 2133<sub>(+166) | 2442<sub>(+121) | 2527<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 1967 | 2321 | 2410 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-19 04:39:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.6.0"]
  y-axis "Elo Rating" 2600 --> 3600
  line "E1: STC (8.0+0.08s)" [2600, 3135]
  line "E1: LTC (60.0+0.60s)" [2971, 3343]
  line "E1: VLTC (2m24s+1.12s)" [3065, 3457]
  line "P1: STC (8.0+0.08s)" [2784, 3278]
  line "P1: LTC (60.0+0.60s)" [3058, 3511]
  line "P1: VLTC (2m24s+1.12s)" [3205, 3494]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.6.0"]
  y-axis "Elo Rating" 1900 --> 3500
  line "T1: STC (8.0+0.08s)" [1967, 2133, 2498, 2684, 3197]
  line "T1: LTC (60.0+0.60s)" [2321, 2442, 2824, 3040, 3395]
  line "T1: VLTC (2m24s+1.12s)" [2410, 2527, 2930, 3123, 3422]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3422 | 36 | 198 | 56% | 3372 | 74% |
|  |  | P1 | 3494 | 92 | 32 | 61% | 3398 | 59% |
|  |  | E1 | 3457 | 42 | 142 | 53% | 3429 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3395 | 34 | 232 | 50% | 3386 | 64% |
|  |  | P1 | 3511 | 94 | 32 | 61% | 3395 | 59% |
|  |  | E1 | 3343 | 55 | 84 | 51% | 3322 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3197 | 30 | 304 | 48% | 3201 | 57% |
|  |  | P1 | 3278 | 89 | 40 | 65% | 3132 | 45% |
|  |  | E1 | 3135 | 45 | 144 | 51% | 3113 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3123 | 27 | 408 | 50% | 3123 | 46% |
|  |  | P1 | 3205 | 41 | 164 | 48% | 3222 | 55% |
|  |  | E1 | 3065 | 28 | 366 | 46% | 3094 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3040 | 27 | 404 | 51% | 3033 | 45% |
|  |  | P1 | 3058 | 36 | 234 | 50% | 3051 | 39% |
|  |  | E1 | 2971 | 30 | 322 | 46% | 3002 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2684 | 27 | 448 | 48% | 2704 | 31% |
|  |  | P1 | 2784 | 38 | 216 | 53% | 2759 | 34% |
|  |  | E1 | 2600 | 33 | 298 | 45% | 2639 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2930 | 25 | 492 | 47% | 2952 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2824 | 30 | 358 | 50% | 2819 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2498 | 25 | 576 | 43% | 2558 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2527 | 33 | 312 | 52% | 2507 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2442 | 35 | 274 | 51% | 2429 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2133 | 33 | 328 | 52% | 2114 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2410 | 45 | 172 | 49% | 2425 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2321 | 43 | 208 | 50% | 2321 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1967 | 49 | 148 | 49% | 1983 | 20% |