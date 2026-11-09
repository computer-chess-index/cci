# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-10-18 | 2284<sub>(+110) | 2624<sub>(+170) | 2739<sub>(+212) |  |
| 1.5.0 | 2026-04-23 | 2174 | 2454 | 2527 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-10-18 | 2315<sub>(+55) | 2673<sub>(+127) | 2785<sub>(+111) |  |
| 1.5.0 | 2026-04-23 | 2260 | 2546 | 2674 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2195<sub>(+144) | 2444<sub>(+117) | 2484<sub>(+80) |  |
| 1.4.1 | 2026-04-11 | 2051<sub>(-40) | 2327<sub>(+29) | 2404<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2091 | 2298 | 2390 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:43:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.6.0"]
  y-axis "Elo Rating" 2100 --> 2800
  line "E1: STC (8.0+0.08s)" [2174, 2284]
  line "E1: LTC (60.0+0.60s)" [2454, 2624]
  line "E1: VLTC (2m24s+1.12s)" [2527, 2739]
  line "P1: STC (8.0+0.08s)" [2260, 2315]
  line "P1: LTC (60.0+0.60s)" [2546, 2673]
  line "P1: VLTC (2m24s+1.12s)" [2674, 2785]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "T1: STC (8.0+0.08s)" [2091, 2051, 2195]
  line "T1: LTC (60.0+0.60s)" [2298, 2327, 2444]
  line "T1: VLTC (2m24s+1.12s)" [2390, 2404, 2484]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2785 | 41 | 200 | 54% | 2753 | 28% |
|  |  | E1 | 2739 | 35 | 272 | 50% | 2738 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2673 | 46 | 162 | 49% | 2678 | 24% |
|  |  | E1 | 2624 | 34 | 288 | 50% | 2626 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2284 | 33 | 334 | 54% | 2245 | 21% |
|  |  | P1 | 2315 | 45 | 172 | 50% | 2322 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2484 | 25 | 510 | 49% | 2489 | 35% |
|  |  | P1 | 2674 | 41 | 208 | 46% | 2705 | 29% |
|  |  | E1 | 2527 | 38 | 220 | 49% | 2538 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2444 | 25 | 516 | 51% | 2431 | 34% |
|  |  | P1 | 2546 | 45 | 164 | 46% | 2591 | 31% |
|  |  | E1 | 2454 | 38 | 242 | 53% | 2406 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2195 | 25 | 572 | 48% | 2210 | 22% |
|  |  | P1 | 2260 | 39 | 220 | 49% | 2276 | 29% |
|  |  | E1 | 2174 | 37 | 264 | 46% | 2223 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2404 | 33 | 292 | 50% | 2400 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2327 | 34 | 296 | 50% | 2325 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2051 | 34 | 302 | 51% | 2039 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2390 | 40 | 216 | 47% | 2418 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 39 | 226 | 53% | 2275 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2091 | 43 | 184 | 50% | 2086 | 23% |