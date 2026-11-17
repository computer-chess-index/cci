# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3204<sub>(+196) | 3430<sub>(+109) | 3484<sub>(+94) |  |
| 1.9.1 | 2026-10-18 | 3008<sub>(+209) | 3321<sub>(+193) | 3390<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2799 | 3128 | 3194 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3164<sub>(+156) | 3341<sub>(+75) | 3436<sub>(+124) |  |
| 1.9.1 | 2026-10-18 | 3008<sub>(+184) | 3266<sub>(+158) | 3312<sub>(+138) |  |
| 1.9.0 | 2026-10-16 | 2824 | 3108 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2824 | 3108 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:43:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2799, 3008, 3204]
  line "E1: LTC (60.0+0.60s)" [3128, 3321, 3430]
  line "E1: VLTC (2m24s+1.12s)" [3194, 3390, 3484]
  line "P1: STC (8.0+0.08s)" [2824, 3008, 3164]
  line "P1: LTC (60.0+0.60s)" [3108, 3266, 3341]
  line "P1: VLTC (2m24s+1.12s)" [3174, 3312, 3436]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3484 | 33 | 234 | 51% | 3475 | 73% |
|  |  | P1 | 3436 | 30 | 262 | 54% | 3405 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3430 | 27 | 338 | 53% | 3411 | 68% |
|  |  | P1 | 3341 | 42 | 140 | 51% | 3339 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3164 | 34 | 234 | 53% | 3144 | 59% |
|  |  | E1 | 3204 | 32 | 274 | 53% | 3185 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3312 | 35 | 210 | 52% | 3301 | 62% |
|  |  | E1 | 3390 | 28 | 342 | 51% | 3379 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3266 | 34 | 236 | 49% | 3272 | 58% |
|  |  | E1 | 3321 | 30 | 302 | 53% | 3298 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3008 | 41 | 172 | 50% | 3009 | 46% |
|  |  | E1 | 3008 | 28 | 388 | 53% | 2984 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3174 | 42 | 194 | 60% | 2944 | 39% |
|  |  | E1 | 3194 | 34 | 292 | 55% | 3040 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3108 | 50 | 150 | 62% | 2799 | 32% |
|  |  | E1 | 3128 | 42 | 214 | 62% | 2839 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2824 | 47 | 176 | 58% | 2611 | 26% |
|  |  | E1 | 2799 | 42 | 220 | 61% | 2549 | 26% |