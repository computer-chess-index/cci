# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-10-18 | 2275<sub>(+104) | 2612<sub>(+163) | 2722<sub>(+202) |  |
| 1.5.0 | 2026-04-23 | 2171 | 2449 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-10-18 | 2298<sub>(+60) | 2645<sub>(+126) | 2753<sub>(+115) |  |
| 1.5.0 | 2026-04-23 | 2238 | 2519 | 2638 |  |
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

Generated: 2026-10-24 04:44:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.6.0"]
  y-axis "Elo Rating" 2100 --> 2800
  line "E1: STC (8.0+0.08s)" [2171, 2275]
  line "E1: LTC (60.0+0.60s)" [2449, 2612]
  line "E1: VLTC (2m24s+1.12s)" [2520, 2722]
  line "P1: STC (8.0+0.08s)" [2238, 2298]
  line "P1: LTC (60.0+0.60s)" [2519, 2645]
  line "P1: VLTC (2m24s+1.12s)" [2638, 2753]
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
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2753 | 46 | 160 | 54% | 2711 | 28% |
|  |  | E1 | 2722 | 37 | 244 | 49% | 2734 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2645 | 50 | 136 | 49% | 2651 | 24% |
|  |  | E1 | 2612 | 38 | 232 | 49% | 2623 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2298 | 50 | 144 | 52% | 2280 | 19% |
|  |  | E1 | 2275 | 36 | 280 | 55% | 2222 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2484 | 25 | 510 | 49% | 2489 | 35% |
|  |  | P1 | 2638 | 41 | 208 | 46% | 2670 | 29% |
|  |  | E1 | 2520 | 38 | 220 | 49% | 2531 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2519 | 45 | 164 | 46% | 2562 | 31% |
|  |  | E1 | 2449 | 38 | 242 | 53% | 2400 | 30% |
|  |  | T1 | 2444 | 25 | 516 | 51% | 2431 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2238 | 39 | 220 | 49% | 2255 | 29% |
|  |  | E1 | 2171 | 37 | 264 | 46% | 2219 | 25% |
|  |  | T1 | 2195 | 25 | 572 | 48% | 2210 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2404 | 33 | 292 | 50% | 2400 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2327 | 34 | 296 | 50% | 2325 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2051 | 34 | 302 | 51% | 2039 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2390 | 40 | 216 | 47% | 2418 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 39 | 226 | 53% | 2275 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2091 | 43 | 184 | 50% | 2086 | 23% |