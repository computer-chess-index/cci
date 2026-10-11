# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1800 | 2107 | 2151 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1916 | 2311 | 2538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-11 15:25:39

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

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2151 | 44 | 188 | 51% | 2155 | 27% |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2354 | 26 | 482 | 49% | 2367 | 33% |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2538 | 47 | 154 | 43% | 2623 | 29% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2192 | 28 | 450 | 51% | 2174 | 29% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 50 | 136 | 50% | 2325 | 29% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2107 | 41 | 212 | 47% | 2167 | 28% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1929 | 26 | 542 | 50% | 1935 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1916 | 47 | 154 | 47% | 1937 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1800 | 39 | 220 | 46% | 1866 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2125 | 31 | 372 | 41% | 2236 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1836 | 36 | 298 | 46% | 1906 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1354 | 38 | 288 | 47% | 1418 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |