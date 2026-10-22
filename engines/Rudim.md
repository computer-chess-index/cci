# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.5 | 2026-07-06 | 2641 | 2931 | 2990 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.5 | 2026-07-06 | 2742 | 3000 | 3104 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.5 | 2026-07-06 | 2645<sub>(+15) | 2893<sub>(+67) | 3008<sub>(+120) |  |
| 3.0.4 | 2026-06-20 | 2630<sub>(+88) | 2826<sub>(+45) | 2888<sub>(+8) |  |
| 3.0.3 | 2026-06-18 | 2542<sub>(+81) | 2781<sub>(+58) | 2880<sub>(+88) |  |
| 3.0.2 | 2026-06-13 | 2461<sub>(+170) | 2723<sub>(+173) | 2792<sub>(+184) |  |
| 3.0.1 | 2026-06-09 | 2291<sub>(+49) | 2550<sub>(+100) | 2608<sub>(+5) |  |
| 3.0.0 | 2026-06-06 | 2242<sub>(+428) | 2450<sub>(+413) | 2603<sub>(+438) |  |
| 2.1.2 | 2026-05-20 | 1814<sub>(+83) | 2037<sub>(+47) | 2165<sub>(+75) |  |
| 2.1.1 | 2026-05-16 | 1731<sub>(-12) | 1990<sub>(+32) | 2090<sub>(+132) |  |
| 2.1.0 | 2026-05-14 | 1743<sub>(+82) | 1958<sub>(+36) | 1958<sub>(-6) |  |
| 2.0.0 | 2026-05-03 | 1661<sub>(+59) | 1922<sub>(+70) | 1964<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1602 | 1852 | 1967 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A3.0.5" target="_blank">Submit new version</a>

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

Generated: 2026-10-22 04:43:08

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.0.4", "3.0.5"]
  y-axis "Elo Rating" 1600 --> 3100
  line "T1: STC (8.0+0.08s)" [1602, 1661, 1743, 1731, 1814, 2242, 2291, 2461, 2542, 2630, 2645]
  line "T1: LTC (60.0+0.60s)" [1852, 1922, 1958, 1990, 2037, 2450, 2550, 2723, 2781, 2826, 2893]
  line "T1: VLTC (2m24s+1.12s)" [1967, 1964, 1958, 2090, 2165, 2603, 2608, 2792, 2880, 2888, 3008]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3104 | 35 | 228 | 48% | 3120 | 49% |
|  |  | E1 | 2990 | 29 | 344 | 47% | 3019 | 54% |
|  |  | T1 | 3008 | 27 | 398 | 48% | 3020 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3000 | 36 | 230 | 52% | 2992 | 44% |
|  |  | E1 | 2931 | 31 | 312 | 47% | 2957 | 46% |
|  |  | T1 | 2893 | 28 | 380 | 50% | 2897 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2742 | 37 | 232 | 48% | 2755 | 35% |
|  |  | E1 | 2641 | 34 | 284 | 48% | 2657 | 31% |
|  |  | T1 | 2645 | 29 | 378 | 50% | 2647 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2888 | 47 | 132 | 51% | 2878 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2826 | 39 | 192 | 51% | 2817 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2630 | 44 | 170 | 51% | 2622 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2880 | 38 | 208 | 53% | 2853 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2781 | 42 | 174 | 50% | 2781 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2542 | 40 | 204 | 50% | 2538 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2792 | 37 | 220 | 51% | 2785 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2723 | 35 | 248 | 52% | 2708 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2461 | 38 | 220 | 51% | 2453 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2608 | 37 | 232 | 50% | 2615 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2550 | 36 | 252 | 51% | 2537 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2291 | 37 | 246 | 49% | 2302 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2603 | 48 | 150 | 50% | 2607 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2450 | 41 | 200 | 51% | 2435 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2242 | 32 | 338 | 57% | 2174 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2165 | 35 | 274 | 51% | 2156 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2037 | 37 | 244 | 51% | 2026 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1814 | 40 | 228 | 51% | 1802 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2090 | 36 | 284 | 49% | 2097 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1990 | 32 | 340 | 47% | 2007 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1731 | 37 | 264 | 48% | 1742 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1958 | 34 | 292 | 51% | 1949 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1958 | 34 | 288 | 50% | 1959 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1743 | 35 | 276 | 49% | 1747 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1964 | 35 | 294 | 49% | 1975 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1922 | 33 | 336 | 51% | 1912 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1661 | 34 | 306 | 47% | 1694 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1967 | 37 | 264 | 47% | 1998 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1852 | 35 | 296 | 50% | 1856 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1602 | 34 | 320 | 53% | 1571 | 21% |