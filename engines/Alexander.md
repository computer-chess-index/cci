# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 2930<sub>(-62) | 3201<sub>(-61) | 3299<sub>(+99) |  |
| 8.2 | 2026-03-23 | 2992 | 3262 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 2909<sub>(+69) | 3124<sub>(+22) | 3175<sub>(+117) |  |
| 8.2 | 2026-03-23 | 2840 | 3102 | 3058 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3163<sub>(+3) | 3389<sub>(+17) | 3444<sub>(+16) |  |
| 8.2 | 2026-03-23 | 3160<sub>(-26) | 3372<sub>(-8) | 3428<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3186<sub>(+39) | 3380<sub>(-11) | 3440<sub>(+11) |  |
| 8.0 | 2026-03-10 | 3147 | 3391 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:35:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.2", "8.3"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2992, 2930]
  line "E1: LTC (60.0+0.60s)" [3262, 3201]
  line "E1: VLTC (2m24s+1.12s)" [3200, 3299]
  line "P1: STC (8.0+0.08s)" [2840, 2909]
  line "P1: LTC (60.0+0.60s)" [3102, 3124]
  line "P1: VLTC (2m24s+1.12s)" [3058, 3175]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "T1: STC (8.0+0.08s)" [3147, 3186, 3160, 3163]
  line "T1: LTC (60.0+0.60s)" [3391, 3380, 3372, 3389]
  line "T1: VLTC (2m24s+1.12s)" [3429, 3440, 3428, 3444]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3175 | 26 | 494 | 57% | 3102 | 33% |
|  |  | E1 | 3299 | 27 | 430 | 50% | 3283 | 36% |
|  |  | T1 | 3444 | 22 | 534 | 50% | 3447 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3124 | 33 | 302 | 53% | 3060 | 34% |
|  |  | E1 | 3201 | 27 | 460 | 53% | 3151 | 32% |
|  |  | T1 | 3389 | 22 | 514 | 48% | 3403 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2909 | 30 | 384 | 41% | 2993 | 29% |
|  |  | E1 | 2930 | 28 | 454 | 42% | 3009 | 28% |
|  |  | T1 | 3163 | 24 | 500 | 52% | 3148 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3200 | 78 | 62 | 60% | 3074 | 19% |
|  |  | T1 | 3428 | 26 | 380 | 49% | 3436 | 70% |
|  |  | P1 | 3058 | 84 | 54 | 70% | 2842 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3262 | 77 | 60 | 61% | 3077 | 28% |
|  |  | T1 | 3372 | 31 | 284 | 50% | 3371 | 62% |
|  |  | P1 | 3102 | 84 | 48 | 59% | 2952 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3160 | 27 | 396 | 48% | 3174 | 44% |
|  |  | P1 | 2840 | 84 | 52 | 44% | 2909 | 27% |
|  |  | E1 | 2992 | 74 | 78 | 65% | 2720 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3440 | 28 | 324 | 49% | 3445 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3380 | 30 | 290 | 51% | 3374 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3186 | 31 | 302 | 49% | 3194 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3429 | 28 | 308 | 50% | 3426 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3391 | 28 | 332 | 50% | 3390 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3147 | 31 | 300 | 49% | 3152 | 47% |