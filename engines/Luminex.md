# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2612<sub>(+487) | 3017<sub>(+511) | 3155<sub>(+585) |  |
| 6.5.0 | 2026-11-06 | 2125<sub>(+176) | 2506<sub>(+276) | 2570<sub>(+243) |  |
| 6.3.0 | 2026-10-27 | 1949<sub>(+116) | 2230<sub>(+32) | 2327<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1833 | 2198 | 2391 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2747<sub>(+652) | 3124<sub>(+655) | 3202<sub>(+561) |  |
| 6.5.0 | 2026-11-06 | 2095<sub>(+113) | 2469<sub>(+166) | 2641<sub>(+238) |  |
| 6.3.0 | 2026-10-27 | 1982<sub>(+100) | 2303<sub>(+40) | 2403<sub>(-4) |  |
| 6.1.0 | 2026-09-24 | 1882 | 2263 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1882 | 2263 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:39:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1"]
  y-axis "Elo Rating" 1800 --> 3300
  line "E1: STC (8.0+0.08s)" [1833, 1949, 2125, 2612]
  line "E1: LTC (60.0+0.60s)" [2198, 2230, 2506, 3017]
  line "E1: VLTC (2m24s+1.12s)" [2391, 2327, 2570, 3155]
  line "P1: STC (8.0+0.08s)" [1882, 1982, 2095, 2747]
  line "P1: LTC (60.0+0.60s)" [2263, 2303, 2469, 3124]
  line "P1: VLTC (2m24s+1.12s)" [2407, 2403, 2641, 3202]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3202 | 34 | 274 | 60% | 3101 | 43% |
|  |  | E1 | 3155 | 32 | 306 | 58% | 3067 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3124 | 51 | 132 | 57% | 3036 | 32% |
|  |  | E1 | 3017 | 28 | 382 | 48% | 3029 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2612 | 37 | 236 | 56% | 2547 | 34% |
|  |  | P1 | 2747 | 45 | 168 | 57% | 2670 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2641 | 52 | 124 | 52% | 2624 | 24% |
|  |  | E1 | 2570 | 45 | 172 | 52% | 2547 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2469 | 54 | 120 | 52% | 2448 | 21% |
|  |  | E1 | 2506 | 40 | 208 | 52% | 2480 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2095 | 53 | 120 | 47% | 2122 | 26% |
|  |  | E1 | 2125 | 45 | 168 | 52% | 2109 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2403 | 50 | 140 | 53% | 2381 | 24% |
|  |  | E1 | 2327 | 39 | 240 | 50% | 2321 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2303 | 45 | 176 | 53% | 2276 | 18% |
|  |  | E1 | 2230 | 42 | 204 | 51% | 2223 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1949 | 42 | 212 | 51% | 1941 | 16% |
|  |  | P1 | 1982 | 42 | 204 | 47% | 2013 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2407 | 63 | 80 | 50% | 2406 | 30% |
|  |  | E1 | 2391 | 44 | 182 | 49% | 2403 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2263 | 48 | 164 | 55% | 2201 | 18% |
|  |  | E1 | 2198 | 43 | 200 | 52% | 2167 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1882 | 44 | 212 | 59% | 1750 | 18% |
|  |  | E1 | 1833 | 40 | 250 | 55% | 1736 | 17% |