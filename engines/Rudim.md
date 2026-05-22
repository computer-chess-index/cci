# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.2 | 2026-05-20 | 1825<sub>(+102) | 2009<sub>(+30) | 2137<sub>(+61) |  |
| 2.1.1 | 2026-05-16 | 1723<sub>(-13) | 1979<sub>(+30) | 2076<sub>(+128) |  |
| 2.1.0 | 2026-05-14 | 1736<sub>(+82) | 1949<sub>(+33) | 1948<sub>(-7) |  |
| 2.0.0 | 2026-05-03 | 1654<sub>(+61) | 1916<sub>(+71) | 1955<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1593<sub>(+new) | 1845<sub>(+new) | 1958<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A2.1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 15:04:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1593, 1654, 1736, 1723, 1825]
  line "STC (8.0+0.08s)" [1593, 1654, 1736, 1723, 1825]
  line "LTC (60.0+0.60s)" [1845, 1916, 1949, 1979, 2009]
  line "VLTC (2m24s+1.12s)" [1958, 1955, 1948, 2076, 2137]
  line "VLTC (2m24s+1.12s)" [1958, 1955, 1948, 2076, 2137]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2137 | 46 | 164 | 52% | 2120 | 24% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2009 | 56 | 112 | 53% | 1985 | 21% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 1825 | 58 | 100 | 50% | 1823 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2076 | 36 | 284 | 49% | 2083 | 23% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1979 | 32 | 340 | 47% | 1995 | 26% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1723 | 37 | 264 | 48% | 1733 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1948 | 34 | 292 | 51% | 1941 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1949 | 34 | 288 | 50% | 1951 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1736 | 35 | 276 | 49% | 1739 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1955 | 35 | 294 | 49% | 1967 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1916 | 33 | 336 | 51% | 1904 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1654 | 34 | 306 | 47% | 1686 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1958 | 37 | 264 | 47% | 1989 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1845 | 35 | 296 | 50% | 1848 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1593 | 34 | 320 | 53% | 1562 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |