# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1962<sub>(+137) | 2234<sub>(+125) | 2321<sub>(+56) |  |
| 1.4.2 | 2026-03-22 | 1825<sub>(+13) | 2109<sub>(-60) | 2265<sub>(+40) |  |
| 1.4.1 | 2026-03-15 | 1812<sub>(+4) | 2169<sub>(+113) | 2225<sub>(+6) |  |
| 1.4.0 | 2026-03-14 | 1808<sub>(+161) | 2056<sub>(+103) | 2219<sub>(+187) |  |
| 1.3.0 | 2026-03-05 | 1647<sub>(+63) | 1953<sub>(+136) | 2032<sub>(+58) |  |
| 1.2.0 | 2026-02-09 | 1584<sub>(+73) | 1817<sub>(+102) | 1974<sub>(+131) |  |
| 1.1.0 | 2026-02-03 | 1511<sub>(+336) | 1715<sub>(+125) | 1843<sub>(+193) |  |
| 1.0.0 | 2026-02-01 | 1175<sub>(-36) | 1590<sub>(+160) | 1650<sub>(+115) |  |
| 0.2.0 | 2025-11-16 | 1211<sub>(+new) | 1430<sub>(+new) | 1535<sub>(+new) |  |
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

Generated: 2026-05-17 06:29:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2400
  line "STC (8.0+0.08s)" [1211, 1175, 1511, 1584, 1647, 1808, 1812, 1825, 1962]
  line "STC (8.0+0.08s)" [1211, 1175, 1511, 1584, 1647, 1808, 1812, 1825, 1962]
  line "LTC (60.0+0.60s)" [1430, 1590, 1715, 1817, 1953, 2056, 2169, 2109, 2234]
  line "VLTC (2m24s+1.12s)" [1535, 1650, 1843, 1974, 2032, 2219, 2225, 2265, 2321]
  line "VLTC (2m24s+1.12s)" [1535, 1650, 1843, 1974, 2032, 2219, 2225, 2265, 2321]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2321 | 29 | 402 | 52% | 2306 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2234 | 28 | 454 | 52% | 2211 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1962 | 29 | 456 | 50% | 1962 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2265 | 36 | 278 | 54% | 2225 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2109 | 36 | 280 | 45% | 2159 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1825 | 41 | 208 | 52% | 1805 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 32 | 340 | 50% | 2229 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2169 | 39 | 230 | 54% | 2136 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1812 | 41 | 216 | 53% | 1782 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2219 | 36 | 272 | 48% | 2241 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 40 | 218 | 52% | 2040 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1808 | 41 | 206 | 51% | 1800 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2032 | 39 | 224 | 50% | 2033 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1953 | 39 | 232 | 49% | 1967 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 44 | 182 | 49% | 1652 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1974 | 38 | 254 | 46% | 2013 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1817 | 41 | 216 | 50% | 1813 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1584 | 43 | 198 | 49% | 1588 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1843 | 38 | 258 | 55% | 1786 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1715 | 45 | 178 | 47% | 1746 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1511 | 48 | 160 | 53% | 1480 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1650 | 48 | 162 | 51% | 1636 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1590 | 46 | 178 | 46% | 1631 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1175 | 65 | 80 | 47% | 1203 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1535 | 37 | 290 | 42% | 1670 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1430 | 43 | 218 | 48% | 1469 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1211 | 118 | 30 | 33% | 1418 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |