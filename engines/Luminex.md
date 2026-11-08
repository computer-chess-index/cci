# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2606<sub>(+477) | 3021<sub>(+509) | 3155<sub>(+578) |  |
| 6.5.0 | 2026-11-06 | 2129<sub>(+176) | 2512<sub>(+275) | 2577<sub>(+243) |  |
| 6.3.0 | 2026-10-27 | 1953<sub>(+120) | 2237<sub>(+34) | 2334<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1833 | 2203 | 2398 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2747<sub>(+649) | 3117<sub>(+648) | 3204<sub>(+565) |  |
| 6.5.0 | 2026-11-06 | 2098<sub>(+115) | 2469<sub>(+166) | 2639<sub>(+236) |  |
| 6.3.0 | 2026-10-27 | 1983<sub>(+100) | 2303<sub>(+39) | 2403<sub>(-3) |  |
| 6.1.0 | 2026-09-24 | 1883 | 2264 | 2406 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1883 | 2264 | 2406 |  |
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

Generated: 2026-11-08 05:39:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1"]
  y-axis "Elo Rating" 1800 --> 3300
  line "E1: STC (8.0+0.08s)" [1833, 1953, 2129, 2606]
  line "E1: LTC (60.0+0.60s)" [2203, 2237, 2512, 3021]
  line "E1: VLTC (2m24s+1.12s)" [2398, 2334, 2577, 3155]
  line "P1: STC (8.0+0.08s)" [1883, 1983, 2098, 2747]
  line "P1: LTC (60.0+0.60s)" [2264, 2303, 2469, 3117]
  line "P1: VLTC (2m24s+1.12s)" [2406, 2403, 2639, 3204]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3155 | 35 | 262 | 60% | 3052 | 41% |
|  |  | P1 | 3204 | 35 | 258 | 61% | 3093 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3117 | 52 | 128 | 57% | 3031 | 32% |
|  |  | E1 | 3021 | 29 | 370 | 48% | 3033 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2747 | 45 | 168 | 57% | 2670 | 36% |
|  |  | E1 | 2606 | 43 | 180 | 57% | 2530 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2639 | 52 | 124 | 52% | 2624 | 24% |
|  |  | E1 | 2577 | 45 | 172 | 52% | 2553 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2469 | 54 | 120 | 52% | 2448 | 21% |
|  |  | E1 | 2512 | 40 | 208 | 52% | 2487 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2098 | 53 | 120 | 47% | 2125 | 26% |
|  |  | E1 | 2129 | 45 | 168 | 52% | 2111 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2334 | 39 | 240 | 50% | 2327 | 18% |
|  |  | P1 | 2403 | 50 | 140 | 53% | 2381 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2303 | 45 | 176 | 53% | 2276 | 18% |
|  |  | E1 | 2237 | 42 | 204 | 51% | 2229 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1983 | 42 | 204 | 47% | 2014 | 21% |
|  |  | E1 | 1953 | 42 | 212 | 51% | 1945 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2406 | 63 | 80 | 50% | 2406 | 30% |
|  |  | E1 | 2398 | 44 | 182 | 49% | 2410 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2264 | 48 | 164 | 55% | 2201 | 18% |
|  |  | E1 | 2203 | 43 | 200 | 52% | 2171 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1883 | 44 | 212 | 59% | 1751 | 18% |
|  |  | E1 | 1833 | 40 | 250 | 55% | 1736 | 17% |