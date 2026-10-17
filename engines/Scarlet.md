# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2711<sub>(+678) | 3090<sub>(+717) | 3155<sub>(+660) |  |
| 1.0 | 2026-07-26 | 2033 | 2373 | 2495 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3027<sub>(+821) | 3248<sub>(+728) | 3329<sub>(+771) |  |
| 1.0 | 2026-07-26 | 2206 | 2520 | 2558 |  |
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

Generated: 2026-10-17 04:42:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3400
  line "E1: STC (8.0+0.08s)" [2033, 2711]
  line "E1: LTC (60.0+0.60s)" [2373, 3090]
  line "E1: VLTC (2m24s+1.12s)" [2495, 3155]
  line "P1: STC (8.0+0.08s)" [2206, 3027]
  line "P1: LTC (60.0+0.60s)" [2520, 3248]
  line "P1: VLTC (2m24s+1.12s)" [2558, 3329]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3329 | 44 | 154 | 57% | 3251 | 49% |
|  |  | E1 | 3155 | 36 | 224 | 55% | 3096 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3248 | 47 | 146 | 57% | 3166 | 36% |
|  |  | E1 | 3090 | 39 | 210 | 54% | 3028 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3027 | 44 | 172 | 49% | 3011 | 35% |
|  |  | E1 | 2711 | 43 | 192 | 57% | 2628 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2558 | 44 | 194 | 45% | 2623 | 20% |
|  |  | E1 | 2495 | 39 | 238 | 48% | 2515 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2520 | 45 | 180 | 48% | 2558 | 22% |
|  |  | E1 | 2373 | 38 | 246 | 50% | 2365 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2206 | 44 | 184 | 49% | 2213 | 21% |
|  |  | E1 | 2033 | 36 | 276 | 47% | 2064 | 21% |