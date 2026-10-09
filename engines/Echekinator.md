# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2025-11-25 | 1674 | 1962 | 1990 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2025-11-25 | 1887 | 2029 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:11:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1774, 2098]
  line "STC (8.0+0.08s)" [1774, 2098]
  line "LTC (60.0+0.60s)" [2061, 2331]
  line "" [2156, 2418]
  line "VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2418 | 43 | 188 | 53% | 2383 | 27% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2331 | 42 | 194 | 51% | 2321 | 28% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2156 | 52 | 152 | 54% | 2103 | 14% |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1990 | 44 | 192 | 45% | 2093 | 23% |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2156 | 26 | 544 | 47% | 2196 | 24% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2029 | 49 | 148 | 48% | 2060 | 24% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 1962 | 44 | 196 | 44% | 2047 | 21% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2061 | 23 | 684 | 51% | 2049 | 24% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 1674 | 43 | 188 | 50% | 1675 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 1774 | 22 | 796 | 48% | 1790 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 1887 | 41 | 204 | 52% | 1870 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |