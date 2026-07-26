# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2367<sub>(+239) | 2608<sub>(+228) | 2742<sub>(+259) |  |
| 1.5 | 2026-05-26 | 2128<sub>(+135) | 2380<sub>(+98) | 2483<sub>(+142) |  |
| 1.4 | 2026-04-25 | 1993<sub>(+488) | 2282<sub>(+435) | 2341<sub>(+379) |  |
| 1.3 | 2026-04-11 | 1505<sub>(+new) | 1847<sub>(+new) | 1962<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-26 06:24:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1505, 1993, 2128, 2367]
  line "STC (8.0+0.08s)" [1505, 1993, 2128, 2367]
  line "LTC (60.0+0.60s)" [1847, 2282, 2380, 2608]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2483, 2742]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2483, 2742]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 32 | 314 | 46% | 2769 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2608 | 34 | 280 | 51% | 2593 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2367 | 36 | 256 | 53% | 2340 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 35 | 274 | 49% | 2493 | 25% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2380 | 40 | 198 | 50% | 2385 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2128 | 40 | 222 | 50% | 2132 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2341 | 29 | 420 | 51% | 2329 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 31 | 380 | 53% | 2248 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1993 | 30 | 406 | 51% | 1974 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 34 | 324 | 48% | 1978 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1847 | 32 | 364 | 50% | 1844 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1505 | 31 | 378 | 50% | 1499 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |