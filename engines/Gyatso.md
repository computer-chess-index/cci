# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-09-25 | 3208<sub>(+532) | 3428<sub>(+377) | 3540<sub>(+393) |  |
| 1.4.0 | 2026-06-05 | 2676 | 3051 | 3147 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-09-25 | 3324<sub>(+469) | 3542<sub>(+406) | 3602<sub>(+316) |  |
| 1.4.0 | 2026-06-05 | 2855 | 3136 | 3286 |  |
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

Generated: 2026-11-01 05:38:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.6.0"]
  y-axis "Elo Rating" 2600 --> 3700
  line "E1: STC (8.0+0.08s)" [2676, 3208]
  line "E1: LTC (60.0+0.60s)" [3051, 3428]
  line "E1: VLTC (2m24s+1.12s)" [3147, 3540]
  line "P1: STC (8.0+0.08s)" [2855, 3324]
  line "P1: LTC (60.0+0.60s)" [3136, 3542]
  line "P1: VLTC (2m24s+1.12s)" [3286, 3602]
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
|  |  | P1 | 3602 | 36 | 196 | 53% | 3576 | 68% |
|  |  | E1 | 3540 | 34 | 218 | 52% | 3524 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3395 | 34 | 232 | 50% | 3386 | 64% |
|  |  | P1 | 3542 | 34 | 220 | 51% | 3533 | 70% |
|  |  | E1 | 3428 | 33 | 232 | 51% | 3420 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3197 | 30 | 304 | 48% | 3201 | 57% |
|  |  | P1 | 3324 | 40 | 176 | 51% | 3308 | 57% |
|  |  | E1 | 3208 | 36 | 220 | 50% | 3197 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3123 | 27 | 408 | 50% | 3123 | 46% |
|  |  | P1 | 3286 | 41 | 164 | 48% | 3305 | 55% |
|  |  | E1 | 3147 | 28 | 366 | 46% | 3177 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3040 | 27 | 404 | 51% | 3033 | 45% |
|  |  | P1 | 3136 | 36 | 234 | 50% | 3129 | 39% |
|  |  | E1 | 3051 | 30 | 322 | 46% | 3083 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2684 | 27 | 448 | 48% | 2704 | 31% |
|  |  | P1 | 2855 | 38 | 216 | 53% | 2830 | 34% |
|  |  | E1 | 2676 | 33 | 298 | 45% | 2715 | 33% |
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