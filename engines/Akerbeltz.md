# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1833 | 2111 | 2218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1987 | 2280 | 2388 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1941<sub>(+549) | 2202<sub>(+562) | 2310<sub>(+536) |  |
| 1.0.0 | 2025-12-31 | 1392 | 1640 | 1774 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akerbeltz+<version>&body=###%20Engine%20name%0AAkerbeltz%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 10:09:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1392, 1941]
  line "T1: STC (8.0+0.08s)" [1392, 1941]
  line "T1: LTC (60.0+0.60s)" [1640, 2202]
  line "" [1774, 2310]
  line "T1: VLTC (2m24s+1.12s)" [1774, 2310]
  line "" [1392,1833]
  line "E1: STC (8.0+0.08s)" [1392,1833]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 47 | 164 | 54% | 2361 | 23% |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2218 | 42 | 204 | 49% | 2249 | 24% |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2310 | 26 | 520 | 51% | 2309 | 21% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2111 | 43 | 216 | 51% | 2120 | 15% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2202 | 27 | 496 | 48% | 2218 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2280 | 54 | 136 | 49% | 2333 | 18% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1833 | 41 | 214 | 48% | 1882 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1941 | 25 | 588 | 48% | 1967 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1987 | 48 | 158 | 49% | 2012 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1774 | 41 | 230 | 41% | 1906 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1640 | 48 | 164 | 43% | 1733 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1392 | 45 | 184 | 40% | 1516 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |