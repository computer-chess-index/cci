# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1902<sub>(+109) | 2180<sub>(+121) | 2263<sub>(+50) |  |
| 1.4.2 | 2026-03-22 | 1793<sub>(+12) | 2059<sub>(-63) | 2213<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1781<sub>(+4) | 2122<sub>(+110) | 2172<sub>(+7) |  |
| 1.4.0 | 2026-03-14 | 1777<sub>(+153) | 2012<sub>(+99) | 2165<sub>(+178) |  |
| 1.3.0 | 2026-03-05 | 1624<sub>(+61) | 1913<sub>(+128) | 1987<sub>(+55) |  |
| 1.2.0 | 2026-02-09 | 1563<sub>(+64) | 1785<sub>(+100) | 1932<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1499<sub>(+323) | 1685<sub>(+116) | 1812<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1176<sub>(-30) | 1569<sub>(+149) | 1627<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1206 | 1420 | 1516 |  |
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

Generated: 2026-08-25 06:45:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1206, 1176, 1499, 1563, 1624, 1777, 1781, 1793, 1902]
  line "STC (8.0+0.08s)" [1206, 1176, 1499, 1563, 1624, 1777, 1781, 1793, 1902]
  line "LTC (60.0+0.60s)" [1420, 1569, 1685, 1785, 1913, 2012, 2122, 2059, 2180]
  line "VLTC (2m24s+1.12s)" [1516, 1627, 1812, 1932, 1987, 2165, 2172, 2213, 2263]
  line "VLTC (2m24s+1.12s)" [1516, 1627, 1812, 1932, 1987, 2165, 2172, 2213, 2263]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2263 | 27 | 478 | 51% | 2252 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2180 | 26 | 506 | 52% | 2161 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1902 | 25 | 578 | 49% | 1908 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2213 | 36 | 278 | 54% | 2171 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2059 | 36 | 280 | 45% | 2110 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1793 | 41 | 208 | 52% | 1773 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2172 | 32 | 340 | 50% | 2176 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2122 | 39 | 230 | 54% | 2087 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1781 | 41 | 216 | 53% | 1751 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2165 | 36 | 272 | 48% | 2188 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2012 | 40 | 218 | 52% | 1997 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1777 | 41 | 206 | 51% | 1769 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1987 | 39 | 224 | 50% | 1989 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1913 | 39 | 232 | 49% | 1926 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1624 | 44 | 182 | 49% | 1629 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1932 | 38 | 254 | 46% | 1971 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1785 | 41 | 216 | 50% | 1781 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1563 | 43 | 198 | 49% | 1569 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1812 | 38 | 258 | 55% | 1755 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1685 | 45 | 178 | 47% | 1716 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1499 | 48 | 160 | 53% | 1467 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1627 | 48 | 162 | 51% | 1613 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1569 | 46 | 178 | 46% | 1609 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1176 | 65 | 80 | 47% | 1204 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1516 | 37 | 290 | 42% | 1648 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1420 | 43 | 218 | 48% | 1457 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1206 | 118 | 30 | 33% | 1408 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |