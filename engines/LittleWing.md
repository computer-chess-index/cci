# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1991<sub>(+21) | 2303<sub>(-7) | 2418<sub>(+42) |  |
| 0.8.0 | 2026-03-03 | 1970 | 2310 | 2376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 1982<sub>(-17) | 2292<sub>(+29) | 2330<sub>(-11) |  |
| 0.8.0 | 2026-03-03 | 1999 | 2263 | 2341 |  |
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

Generated: 2026-11-22 05:39:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1970, 1991]
  line "E1: LTC (60.0+0.60s)" [2310, 2303]
  line "E1: VLTC (2m24s+1.12s)" [2376, 2418]
  line "P1: STC (8.0+0.08s)" [1999, 1982]
  line "P1: LTC (60.0+0.60s)" [2263, 2292]
  line "P1: VLTC (2m24s+1.12s)" [2341, 2330]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2330 | 44 | 186 | 48% | 2372 | 20% |
|  |  | E1 | 2418 | 35 | 280 | 54% | 2360 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2292 | 49 | 140 | 48% | 2314 | 24% |
|  |  | E1 | 2303 | 34 | 312 | 50% | 2287 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1982 | 40 | 224 | 47% | 2005 | 21% |
|  |  | E1 | 1991 | 35 | 308 | 51% | 1975 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2341 | 42 | 200 | 47% | 2350 | 25% |
|  |  | E1 | 2376 | 38 | 248 | 50% | 2371 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2263 | 45 | 172 | 48% | 2280 | 27% |
|  |  | E1 | 2310 | 40 | 228 | 48% | 2330 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1999 | 42 | 224 | 50% | 2013 | 17% |
|  |  | E1 | 1970 | 35 | 312 | 45% | 2040 | 19% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |