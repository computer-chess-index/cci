# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1851<sub>(+647) | 2176<sub>(+444) | 2232<sub>(+343) |  |
| R4 | 2026-04-22 | 1204 | 1732 | 1889 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1828<sub>(+568) | 2221<sub>(+327) | 2381<sub>(+396) |  |
| R4 | 2026-04-22 | 1260 | 1894 | 1985 |  |
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

Generated: 2026-11-26 05:44:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1200 --> 2400
  line "E1: STC (8.0+0.08s)" [1204, 1851]
  line "E1: LTC (60.0+0.60s)" [1732, 2176]
  line "E1: VLTC (2m24s+1.12s)" [1889, 2232]
  line "P1: STC (8.0+0.08s)" [1260, 1828]
  line "P1: LTC (60.0+0.60s)" [1894, 2221]
  line "P1: VLTC (2m24s+1.12s)" [1985, 2381]
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
|  |  | P1 | 2381 | 34 | 290 | 43% | 2458 | 30% |
|  |  | E1 | 2232 | 33 | 326 | 50% | 2242 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2221 | 39 | 224 | 47% | 2275 | 32% |
|  |  | E1 | 2176 | 32 | 350 | 48% | 2214 | 29% |
|  |  | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1828 | 39 | 230 | 48% | 1848 | 24% |
|  |  | E1 | 1851 | 29 | 410 | 46% | 1906 | 29% |
|  |  | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  |  | P1 | 1985 | 59 | 108 | 48% | 2016 | 30% |
|  |  | E1 | 1889 | 50 | 150 | 38% | 2066 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  |  | P1 | 1894 | 55 | 116 | 42% | 1982 | 25% |
|  |  | E1 | 1732 | 50 | 160 | 36% | 1912 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |
|  |  | P1 | 1260 | 61 | 126 | 36% | 1520 | 13% |
|  |  | E1 | 1204 | 48 | 160 | 47% | 1245 | 16% |