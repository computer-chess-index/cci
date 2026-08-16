# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2364<sub>(+236) | 2607<sub>(+230) | 2739<sub>(+252) |  |
| 1.5 | 2026-05-26 | 2128<sub>(+134) | 2377<sub>(+97) | 2487<sub>(+147) |  |
| 1.4 | 2026-04-25 | 1994<sub>(+487) | 2280<sub>(+432) | 2340<sub>(+378) |  |
| 1.3 | 2026-04-11 | 1507<sub>(+new) | 1848<sub>(+new) | 1962<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
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

Generated: 2026-08-16 06:24:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1507, 1994, 2128, 2364]
  line "STC (8.0+0.08s)" [1507, 1994, 2128, 2364]
  line "LTC (60.0+0.60s)" [1848, 2280, 2377, 2607]
  line "VLTC (2m24s+1.12s)" [1962, 2340, 2487, 2739]
  line "VLTC (2m24s+1.12s)" [1962, 2340, 2487, 2739]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 32 | 314 | 46% | 2766 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2607 | 34 | 280 | 51% | 2592 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2364 | 36 | 256 | 53% | 2337 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2487 | 34 | 302 | 49% | 2492 | 26% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2377 | 37 | 234 | 50% | 2380 | 33% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2128 | 35 | 290 | 51% | 2118 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2340 | 29 | 420 | 51% | 2327 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2280 | 31 | 380 | 53% | 2248 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1994 | 30 | 406 | 51% | 1975 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 34 | 324 | 48% | 1978 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1848 | 32 | 364 | 50% | 1844 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1507 | 31 | 378 | 50% | 1501 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |