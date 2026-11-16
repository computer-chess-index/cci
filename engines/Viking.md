# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1860<sub>(+642) | 2160<sub>(+405) | 2240<sub>(+324) |  |
| R4 | 2026-04-22 | 1218 | 1755 | 1916 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1806<sub>(+507) | 2195<sub>(+283) | 2361<sub>(+447) |  |
| R4 | 2026-04-22 | 1299 | 1912 | 1914 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1929<sub>(+575) | 2192<sub>(+356) | 2354<sub>(+229) |  |
| R4 | 2026-04-22 | 1354 | 1836 | 2125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:44:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1200 --> 2400
  line "E1: STC (8.0+0.08s)" [1218, 1860]
  line "E1: LTC (60.0+0.60s)" [1755, 2160]
  line "E1: VLTC (2m24s+1.12s)" [1916, 2240]
  line "P1: STC (8.0+0.08s)" [1299, 1806]
  line "P1: LTC (60.0+0.60s)" [1912, 2195]
  line "P1: VLTC (2m24s+1.12s)" [1914, 2361]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "T1: STC (8.0+0.08s)" [1354, 1929]
  line "T1: LTC (60.0+0.60s)" [1836, 2192]
  line "T1: VLTC (2m24s+1.12s)" [2125, 2354]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2354 | 26 | 482 | 49% | 2367 | 33% |
|  |  | P1 | 2361 | 36 | 262 | 43% | 2434 | 30% |
|  |  | E1 | 2240 | 34 | 314 | 51% | 2241 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  |  | P1 | 2195 | 40 | 212 | 47% | 2246 | 32% |
|  |  | E1 | 2160 | 33 | 310 | 46% | 2218 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
|  |  | P1 | 1806 | 40 | 210 | 48% | 1825 | 23% |
|  |  | E1 | 1860 | 30 | 388 | 47% | 1913 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1916 | 67 | 90 | 32% | 2172 | 22% |
|  |  | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  |  | P1 | 1914 | 72 | 74 | 41% | 2034 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1755 | 62 | 108 | 32% | 1995 | 19% |
|  |  | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  |  | P1 | 1912 | 72 | 72 | 41% | 2006 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |
|  |  | P1 | 1299 | 79 | 78 | 29% | 1685 | 17% |
|  |  | E1 | 1218 | 54 | 132 | 46% | 1269 | 14% |