# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2762<sub>(+678) | 3132<sub>(+709) | 3208<sub>(+663) |  |
| 1.0 | 2026-07-26 | 2084 | 2423 | 2545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3039<sub>(+837) | 3249<sub>(+726) | 3329<sub>(+769) |  |
| 1.0 | 2026-07-26 | 2202 | 2523 | 2560 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-21 04:43:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3400
  line "E1: STC (8.0+0.08s)" [2084, 2762]
  line "E1: LTC (60.0+0.60s)" [2423, 3132]
  line "E1: VLTC (2m24s+1.12s)" [2545, 3208]
  line "P1: STC (8.0+0.08s)" [2202, 3039]
  line "P1: LTC (60.0+0.60s)" [2523, 3249]
  line "P1: VLTC (2m24s+1.12s)" [2560, 3329]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3329 | 39 | 192 | 55% | 3271 | 48% |
|  |  | E1 | 3208 | 33 | 270 | 54% | 3163 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3249 | 45 | 158 | 56% | 3178 | 39% |
|  |  | E1 | 3132 | 36 | 244 | 52% | 3093 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2762 | 39 | 224 | 55% | 2695 | 28% |
|  |  | P1 | 3039 | 42 | 184 | 51% | 3015 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2560 | 44 | 194 | 45% | 2624 | 20% |
|  |  | E1 | 2545 | 39 | 238 | 48% | 2565 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2523 | 46 | 180 | 48% | 2561 | 22% |
|  |  | E1 | 2423 | 38 | 246 | 50% | 2414 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2202 | 44 | 184 | 49% | 2209 | 21% |
|  |  | E1 | 2084 | 36 | 276 | 47% | 2115 | 21% |