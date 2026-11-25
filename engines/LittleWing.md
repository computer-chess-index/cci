# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1991<sub>(+15) | 2303<sub>(-23) | 2418<sub>(+39) |  |
| 0.8.0 | 2026-03-03 | 1976 | 2326 | 2379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1994<sub>(-15) | 2314<sub>(+47) | 2344<sub>(-13) |  |
| 0.8.0 | 2026-03-03 | 2009 | 2267 | 2357 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.0 | 2026-03-03 | 2074 | 2344 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LittleWing+<version>&body=###%20Engine%20name%0ALittleWing%0A%0A###%20Version%0A0.8.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:39:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1976, 1991]
  line "E1: LTC (60.0+0.60s)" [2326, 2303]
  line "E1: VLTC (2m24s+1.12s)" [2379, 2418]
  line "P1: STC (8.0+0.08s)" [2009, 1994]
  line "P1: LTC (60.0+0.60s)" [2267, 2314]
  line "P1: VLTC (2m24s+1.12s)" [2357, 2344]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2344 | 44 | 186 | 48% | 2385 | 20% |
|  |  | E1 | 2418 | 34 | 304 | 54% | 2367 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2314 | 48 | 152 | 48% | 2327 | 22% |
|  |  | E1 | 2303 | 34 | 316 | 50% | 2290 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1994 | 39 | 232 | 48% | 2014 | 20% |
|  |  | E1 | 1991 | 34 | 316 | 50% | 1980 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2357 | 42 | 200 | 47% | 2365 | 25% |
|  |  | E1 | 2379 | 38 | 248 | 50% | 2372 | 24% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2326 | 39 | 244 | 50% | 2330 | 19% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2267 | 43 | 188 | 47% | 2292 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1976 | 34 | 316 | 46% | 2041 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |
|  |  | P1 | 2009 | 41 | 228 | 50% | 2024 | 17% |