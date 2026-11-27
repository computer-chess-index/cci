# Engine: Onechess

Author: Julien Orlandini

Home: https://github.com/ovnice-dev/onechess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.1 | 2026-11-25 | 3027<sub>(+570) | 3397<sub>(+519) | 3518<sub>(+491) |  |
| 1.2 | 2026-11-22 | 2457<sub>(-24) | 2878<sub>(-57) | 3027<sub>(+35) |  |
| 1.0 | 2026-11-15 | 2481 | 2935 | 2992 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.1 | 2026-11-25 | 3177<sub>(+613) | 3437<sub>(+482) | 3483<sub>(+470) |  |
| 1.2 | 2026-11-22 | 2564<sub>(+58) | 2955<sub>(+43) | 3013<sub>(+4) |  |
| 1.0 | 2026-11-15 | 2506 | 2912 | 3009 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-11-15 | 2506 | 2912 | 3009 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onechess+<version>&body=###%20Engine%20name%0AOnechess%0A%0A###%20Version%0A1.2.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:41:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.2.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2481, 2457, 3027]
  line "E1: LTC (60.0+0.60s)" [2935, 2878, 3397]
  line "E1: VLTC (2m24s+1.12s)" [2992, 3027, 3518]
  line "P1: STC (8.0+0.08s)" [2506, 2564, 3177]
  line "P1: LTC (60.0+0.60s)" [2912, 2955, 3437]
  line "P1: VLTC (2m24s+1.12s)" [3009, 3013, 3483]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3518 | 30 | 318 | 57% | 3456 | 57% |
|  |  | P1 | 3483 | 34 | 224 | 56% | 3434 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3437 | 33 | 248 | 55% | 3390 | 58% |
|  |  | E1 | 3397 | 26 | 444 | 59% | 3309 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3177 | 32 | 340 | 60% | 3039 | 32% |
|  |  | E1 | 3027 | 36 | 328 | 64% | 2846 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3013 | 49 | 130 | 47% | 3035 | 38% |
|  |  | E1 | 3027 | 43 | 168 | 54% | 2993 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2955 | 74 | 60 | 49% | 2965 | 25% |
|  |  | E1 | 2878 | 25 | 520 | 57% | 2811 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2564 | 55 | 116 | 51% | 2553 | 20% |
|  |  | E1 | 2457 | 32 | 354 | 56% | 2394 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2992 | 32 | 316 | 46% | 3021 | 32% |
|  |  | P1 | 3009 | 45 | 154 | 50% | 3001 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2935 | 36 | 268 | 51% | 2912 | 29% |
|  |  | P1 | 2912 | 40 | 212 | 49% | 2901 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2506 | 40 | 216 | 48% | 2526 | 21% |
|  |  | E1 | 2481 | 37 | 260 | 50% | 2489 | 19% |