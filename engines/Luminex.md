# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2631<sub>(+482) | 3040<sub>(+513) | 3177<sub>(+585) |  |
| 6.5.0 | 2026-11-06 | 2149<sub>(+178) | 2527<sub>(+272) | 2592<sub>(+243) |  |
| 6.3.0 | 2026-10-27 | 1971<sub>(+119) | 2255<sub>(+34) | 2349<sub>(-65) |  |
| 6.1.0 | 2026-09-24 | 1852 | 2221 | 2414 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2749<sub>(+652) | 3120<sub>(+649) | 3201<sub>(+560) |  |
| 6.5.0 | 2026-11-06 | 2097<sub>(+115) | 2471<sub>(+167) | 2641<sub>(+237) |  |
| 6.3.0 | 2026-10-27 | 1982<sub>(+100) | 2304<sub>(+39) | 2404<sub>(-4) |  |
| 6.1.0 | 2026-09-24 | 1882 | 2265 | 2408 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1882 | 2265 | 2408 |  |
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

Generated: 2026-11-11 05:39:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1"]
  y-axis "Elo Rating" 1800 --> 3300
  line "E1: STC (8.0+0.08s)" [1852, 1971, 2149, 2631]
  line "E1: LTC (60.0+0.60s)" [2221, 2255, 2527, 3040]
  line "E1: VLTC (2m24s+1.12s)" [2414, 2349, 2592, 3177]
  line "P1: STC (8.0+0.08s)" [1882, 1982, 2097, 2749]
  line "P1: LTC (60.0+0.60s)" [2265, 2304, 2471, 3120]
  line "P1: VLTC (2m24s+1.12s)" [2408, 2404, 2641, 3201]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3201 | 34 | 278 | 60% | 3101 | 44% |
|  |  | E1 | 3177 | 31 | 320 | 58% | 3094 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3120 | 48 | 148 | 56% | 3047 | 32% |
|  |  | E1 | 3040 | 28 | 394 | 48% | 3051 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2631 | 37 | 240 | 55% | 2572 | 34% |
|  |  | P1 | 2749 | 45 | 168 | 57% | 2670 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2641 | 52 | 124 | 52% | 2624 | 24% |
|  |  | E1 | 2592 | 45 | 172 | 52% | 2569 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2471 | 54 | 120 | 52% | 2449 | 21% |
|  |  | E1 | 2527 | 40 | 208 | 52% | 2502 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2097 | 53 | 120 | 47% | 2124 | 26% |
|  |  | E1 | 2149 | 45 | 168 | 52% | 2132 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2404 | 50 | 140 | 53% | 2383 | 24% |
|  |  | E1 | 2349 | 39 | 240 | 50% | 2342 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2304 | 45 | 176 | 53% | 2277 | 18% |
|  |  | E1 | 2255 | 42 | 204 | 51% | 2248 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1971 | 42 | 212 | 51% | 1963 | 16% |
|  |  | P1 | 1982 | 42 | 204 | 47% | 2014 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2408 | 63 | 80 | 50% | 2407 | 30% |
|  |  | E1 | 2414 | 44 | 182 | 49% | 2426 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2265 | 48 | 164 | 55% | 2202 | 18% |
|  |  | E1 | 2221 | 43 | 200 | 52% | 2190 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1882 | 44 | 212 | 59% | 1750 | 18% |
|  |  | E1 | 1852 | 40 | 250 | 55% | 1754 | 17% |