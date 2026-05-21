# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1910<sub>(+116) | 2178<sub>(+121) | 2261<sub>(+51) |  |
| 1.4.2 | 2026-03-22 | 1794<sub>(+13) | 2057<sub>(-63) | 2210<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1781<sub>(+4) | 2120<sub>(+108) | 2169<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1777<sub>(+154) | 2012<sub>(+99) | 2164<sub>(+177) |  |
| 1.3.0 | 2026-03-05 | 1623<sub>(+60) | 1913<sub>(+128) | 1987<sub>(+55) |  |
| 1.2.0 | 2026-02-09 | 1563<sub>(+66) | 1785<sub>(+99) | 1932<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1497<sub>(+324) | 1686<sub>(+117) | 1812<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1173<sub>(-31) | 1569<sub>(+150) | 1627<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1204<sub>(+new) | 1419<sub>(+new) | 1516<sub>(+new) |  |
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

Generated: 2026-05-21 06:29:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1204, 1173, 1497, 1563, 1623, 1777, 1781, 1794, 1910]
  line "STC (8.0+0.08s)" [1204, 1173, 1497, 1563, 1623, 1777, 1781, 1794, 1910]
  line "LTC (60.0+0.60s)" [1419, 1569, 1686, 1785, 1913, 2012, 2120, 2057, 2178]
  line "VLTC (2m24s+1.12s)" [1516, 1627, 1812, 1932, 1987, 2164, 2169, 2210, 2261]
  line "VLTC (2m24s+1.12s)" [1516, 1627, 1812, 1932, 1987, 2164, 2169, 2210, 2261]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 29 | 402 | 52% | 2246 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2178 | 28 | 454 | 52% | 2155 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1910 | 28 | 474 | 49% | 1913 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2210 | 36 | 278 | 54% | 2169 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2057 | 36 | 280 | 45% | 2107 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1794 | 41 | 208 | 52% | 1773 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2169 | 32 | 340 | 50% | 2174 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2120 | 39 | 230 | 54% | 2086 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1781 | 41 | 216 | 53% | 1751 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2164 | 36 | 272 | 48% | 2186 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2012 | 40 | 218 | 52% | 1997 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1777 | 41 | 206 | 51% | 1769 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1987 | 39 | 224 | 50% | 1989 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1913 | 39 | 232 | 49% | 1926 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1623 | 44 | 182 | 49% | 1628 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1932 | 38 | 254 | 46% | 1970 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1785 | 41 | 216 | 50% | 1781 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1563 | 43 | 198 | 49% | 1567 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1812 | 38 | 258 | 55% | 1755 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1686 | 45 | 178 | 47% | 1717 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1497 | 48 | 160 | 53% | 1466 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1627 | 48 | 162 | 51% | 1612 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1569 | 46 | 178 | 46% | 1608 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1173 | 65 | 80 | 47% | 1202 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1516 | 37 | 290 | 42% | 1647 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1419 | 43 | 218 | 48% | 1455 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1204 | 118 | 30 | 33% | 1407 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |