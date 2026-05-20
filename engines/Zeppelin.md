# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1908<sub>(+115) | 2178<sub>(+122) | 2261<sub>(+51) |  |
| 1.4.2 | 2026-03-22 | 1793<sub>(+12) | 2056<sub>(-62) | 2210<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1781<sub>(+6) | 2118<sub>(+106) | 2168<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1775<sub>(+152) | 2012<sub>(+100) | 2163<sub>(+176) |  |
| 1.3.0 | 2026-03-05 | 1623<sub>(+61) | 1912<sub>(+129) | 1987<sub>(+56) |  |
| 1.2.0 | 2026-02-09 | 1562<sub>(+66) | 1783<sub>(+98) | 1931<sub>(+119) |  |
| 1.1.0 | 2026-02-03 | 1496<sub>(+323) | 1685<sub>(+118) | 1812<sub>(+187) |  |
| 1.0.0 | 2026-02-01 | 1173<sub>(-31) | 1567<sub>(+148) | 1625<sub>(+110) |  |
| 0.2.0 | 2025-11-16 | 1204<sub>(+new) | 1419<sub>(+new) | 1515<sub>(+new) |  |
| 0.1.1 | 2025-10-12 |  |  |  |  |
| 0.1.0 | 2025-10-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeppelin+<version>&body=###%20Engine%20name%0AZeppelin%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-20 06:36:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1204, 1173, 1496, 1562, 1623, 1775, 1781, 1793, 1908]
  line "STC (8.0+0.08s)" [1204, 1173, 1496, 1562, 1623, 1775, 1781, 1793, 1908]
  line "LTC (60.0+0.60s)" [1419, 1567, 1685, 1783, 1912, 2012, 2118, 2056, 2178]
  line "VLTC (2m24s+1.12s)" [1515, 1625, 1812, 1931, 1987, 2163, 2168, 2210, 2261]
  line "VLTC (2m24s+1.12s)" [1515, 1625, 1812, 1931, 1987, 2163, 2168, 2210, 2261]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 29 | 402 | 52% | 2246 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2178 | 28 | 454 | 52% | 2153 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1908 | 28 | 472 | 49% | 1913 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2210 | 36 | 278 | 54% | 2168 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 36 | 280 | 45% | 2106 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1793 | 41 | 208 | 52% | 1773 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2168 | 32 | 340 | 50% | 2172 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2118 | 39 | 230 | 54% | 2084 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1781 | 41 | 216 | 53% | 1751 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2163 | 36 | 272 | 48% | 2184 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2012 | 40 | 218 | 52% | 1995 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1775 | 41 | 206 | 51% | 1769 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1987 | 39 | 224 | 50% | 1989 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1912 | 39 | 232 | 49% | 1926 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1623 | 44 | 182 | 49% | 1628 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1931 | 38 | 254 | 46% | 1970 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1783 | 41 | 216 | 50% | 1781 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1562 | 43 | 198 | 49% | 1567 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1812 | 38 | 258 | 55% | 1755 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1685 | 45 | 178 | 47% | 1716 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1496 | 48 | 160 | 53% | 1466 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1625 | 48 | 162 | 51% | 1612 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1567 | 46 | 178 | 46% | 1608 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1173 | 65 | 80 | 47% | 1202 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1515 | 37 | 290 | 42% | 1646 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1419 | 43 | 218 | 48% | 1455 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1204 | 118 | 30 | 33% | 1407 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |