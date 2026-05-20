# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.1 | 2026-05-16 | 1739<sub>(+3) | 1976<sub>(+25) | 2061<sub>(+112) |  |
| 2.1.0 | 2026-05-14 | 1736<sub>(+82) | 1951<sub>(+34) | 1949<sub>(-7) |  |
| 2.0.0 | 2026-05-03 | 1654<sub>(+60) | 1917<sub>(+72) | 1956<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1594<sub>(+new) | 1845<sub>(+new) | 1959<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A2.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-20 06:28:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1594, 1654, 1736, 1739]
  line "STC (8.0+0.08s)" [1594, 1654, 1736, 1739]
  line "LTC (60.0+0.60s)" [1845, 1917, 1951, 1976]
  line "VLTC (2m24s+1.12s)" [1959, 1956, 1949, 2061]
  line "VLTC (2m24s+1.12s)" [1959, 1956, 1949, 2061]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2061 | 37 | 260 | 47% | 2084 | 22% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1976 | 33 | 308 | 47% | 1997 | 28% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1739 | 42 | 208 | 50% | 1733 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1949 | 34 | 292 | 51% | 1943 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1951 | 34 | 288 | 50% | 1952 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1736 | 35 | 276 | 49% | 1740 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1956 | 35 | 294 | 49% | 1967 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1917 | 33 | 336 | 51% | 1905 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1654 | 34 | 306 | 47% | 1686 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1959 | 37 | 264 | 47% | 1990 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1845 | 35 | 296 | 50% | 1850 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1594 | 34 | 320 | 53% | 1563 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |