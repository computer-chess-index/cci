# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2777<sub>(+680) | 3143<sub>(+706) | 3220<sub>(+663) |  |
| 1.0 | 2026-07-26 | 2097 | 2437 | 2557 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3042<sub>(+840) | 3256<sub>(+733) | 3337<sub>(+776) |  |
| 1.0 | 2026-07-26 | 2202 | 2523 | 2561 |  |
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

Generated: 2026-10-22 04:43:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3400
  line "E1: STC (8.0+0.08s)" [2097, 2777]
  line "E1: LTC (60.0+0.60s)" [2437, 3143]
  line "E1: VLTC (2m24s+1.12s)" [2557, 3220]
  line "P1: STC (8.0+0.08s)" [2202, 3042]
  line "P1: LTC (60.0+0.60s)" [2523, 3256]
  line "P1: VLTC (2m24s+1.12s)" [2561, 3337]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3337 | 39 | 196 | 55% | 3276 | 47% |
|  |  | E1 | 3220 | 33 | 274 | 53% | 3182 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3256 | 45 | 160 | 57% | 3182 | 39% |
|  |  | E1 | 3143 | 35 | 252 | 52% | 3108 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3042 | 42 | 184 | 51% | 3017 | 36% |
|  |  | E1 | 2777 | 39 | 224 | 55% | 2709 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2561 | 44 | 194 | 45% | 2626 | 20% |
|  |  | E1 | 2557 | 39 | 238 | 48% | 2577 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2523 | 46 | 180 | 48% | 2562 | 22% |
|  |  | E1 | 2437 | 38 | 246 | 50% | 2427 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2202 | 44 | 184 | 49% | 2210 | 21% |
|  |  | E1 | 2097 | 36 | 276 | 47% | 2128 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |