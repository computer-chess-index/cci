# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1963<sub>(+140) | 2234<sub>(+129) | 2327<sub>(+66) |  |
| 1.4.2 | 2026-03-22 | 1823<sub>(+14) | 2105<sub>(-60) | 2261<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1809<sub>(+4) | 2165<sub>(+112) | 2219<sub>(+4) |  |
| 1.4.0 | 2026-03-14 | 1805<sub>(+161) | 2053<sub>(+102) | 2215<sub>(+186) |  |
| 1.3.0 | 2026-03-05 | 1644<sub>(+63) | 1951<sub>(+137) | 2029<sub>(+58) |  |
| 1.2.0 | 2026-02-09 | 1581<sub>(+73) | 1814<sub>(+102) | 1971<sub>(+131) |  |
| 1.1.0 | 2026-02-03 | 1508<sub>(+335) | 1712<sub>(+124) | 1840<sub>(+193) |  |
| 1.0.0 | 2026-02-01 | 1173<sub>(-35) | 1588<sub>(+160) | 1647<sub>(+115) |  |
| 0.2.0 | 2025-11-16 | 1208<sub>(+new) | 1428<sub>(+new) | 1532<sub>(+new) |  |
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

Generated: 2026-05-04 06:29:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2400
  line "STC (8.0+0.08s)" [1208, 1173, 1508, 1581, 1644, 1805, 1809, 1823, 1963]
  line "STC (8.0+0.08s)" [1208, 1173, 1508, 1581, 1644, 1805, 1809, 1823, 1963]
  line "LTC (60.0+0.60s)" [1428, 1588, 1712, 1814, 1951, 2053, 2165, 2105, 2234]
  line "VLTC (2m24s+1.12s)" [1532, 1647, 1840, 1971, 2029, 2215, 2219, 2261, 2327]
  line "VLTC (2m24s+1.12s)" [1532, 1647, 1840, 1971, 2029, 2215, 2219, 2261, 2327]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2327 | 30 | 366 | 53% | 2298 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2234 | 29 | 434 | 53% | 2205 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1963 | 30 | 404 | 50% | 1963 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 36 | 278 | 54% | 2219 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2105 | 36 | 280 | 45% | 2155 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1823 | 41 | 208 | 52% | 1801 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2219 | 32 | 340 | 50% | 2225 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2165 | 39 | 230 | 54% | 2132 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1809 | 41 | 216 | 53% | 1779 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2215 | 36 | 272 | 48% | 2237 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2053 | 40 | 218 | 52% | 2037 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1805 | 41 | 206 | 51% | 1797 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2029 | 39 | 224 | 50% | 2029 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1951 | 39 | 232 | 49% | 1964 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1644 | 44 | 182 | 49% | 1650 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1971 | 38 | 254 | 46% | 2010 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1814 | 41 | 216 | 50% | 1810 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1581 | 43 | 198 | 49% | 1586 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1840 | 38 | 258 | 55% | 1782 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1712 | 45 | 178 | 47% | 1743 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1508 | 48 | 160 | 53% | 1477 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1647 | 48 | 162 | 51% | 1634 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1588 | 46 | 178 | 46% | 1628 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1173 | 65 | 80 | 47% | 1202 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1532 | 37 | 290 | 42% | 1667 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1428 | 43 | 218 | 48% | 1466 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1208 | 118 | 30 | 33% | 1415 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |