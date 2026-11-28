# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1994<sub>(+12) | 2309<sub>(-17) | 2422<sub>(+49) |  |
| 0.8.0 | 2026-03-03 | 1982 | 2326 | 2373 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2009<sub>(-4) | 2304<sub>(+32) | 2346<sub>(-12) |  |
| 0.8.0 | 2026-03-03 | 2013 | 2272 | 2358 |  |
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

Generated: 2026-11-28 05:40:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1982, 1994]
  line "E1: LTC (60.0+0.60s)" [2326, 2309]
  line "E1: VLTC (2m24s+1.12s)" [2373, 2422]
  line "P1: STC (8.0+0.08s)" [2013, 2009]
  line "P1: LTC (60.0+0.60s)" [2272, 2304]
  line "P1: VLTC (2m24s+1.12s)" [2358, 2346]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2346 | 44 | 186 | 48% | 2388 | 20% |
|  |  | E1 | 2422 | 34 | 308 | 54% | 2367 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2304 | 46 | 166 | 47% | 2329 | 21% |
|  |  | E1 | 2309 | 34 | 320 | 50% | 2291 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2009 | 39 | 240 | 49% | 2017 | 20% |
|  |  | E1 | 1994 | 34 | 316 | 50% | 1982 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2358 | 42 | 200 | 47% | 2368 | 25% |
|  |  | E1 | 2373 | 38 | 252 | 50% | 2372 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2272 | 42 | 192 | 47% | 2295 | 26% |
|  |  | E1 | 2326 | 38 | 248 | 50% | 2330 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |
|  |  | P1 | 2013 | 41 | 228 | 50% | 2028 | 17% |
|  |  | E1 | 1982 | 34 | 324 | 46% | 2041 | 19% |