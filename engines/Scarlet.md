# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2871<sub>(+720) | 3205<sub>(+713) | 3289<sub>(+677) |  |
| 1.0 | 2026-07-26 | 2151 | 2492 | 2612 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3070<sub>(+814) | 3321<sub>(+747) | 3394<sub>(+778) |  |
| 1.0 | 2026-07-26 | 2256 | 2574 | 2616 |  |
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

Generated: 2026-11-07 05:42:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2151, 2871]
  line "E1: LTC (60.0+0.60s)" [2492, 3205]
  line "E1: VLTC (2m24s+1.12s)" [2612, 3289]
  line "P1: STC (8.0+0.08s)" [2256, 3070]
  line "P1: LTC (60.0+0.60s)" [2574, 3321]
  line "P1: VLTC (2m24s+1.12s)" [2616, 3394]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3394 | 36 | 228 | 54% | 3347 | 47% |
|  |  | E1 | 3289 | 29 | 336 | 53% | 3255 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3321 | 40 | 196 | 55% | 3262 | 39% |
|  |  | E1 | 3205 | 31 | 316 | 52% | 3175 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3070 | 34 | 276 | 48% | 3079 | 37% |
|  |  | E1 | 2871 | 31 | 368 | 55% | 2815 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2616 | 44 | 194 | 45% | 2681 | 20% |
|  |  | E1 | 2612 | 39 | 238 | 48% | 2634 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2492 | 38 | 246 | 50% | 2483 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2574 | 46 | 180 | 48% | 2614 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2151 | 36 | 276 | 47% | 2180 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2256 | 44 | 184 | 49% | 2263 | 21% |