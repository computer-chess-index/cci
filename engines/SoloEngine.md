# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2835<sub>(+new) | 3119<sub>(+new) | 3232<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2264<sub>(+97) | 2606<sub>(+145) | 2747<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2167<sub>(+150) | 2461<sub>(+134) | 2597<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2017<sub>(+254) | 2327<sub>(+249) | 2435<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1763<sub>(+134) | 2078<sub>(+103) | 2196<sub>(+126) |  |
| 1.3.1 | 2026-02-01 | 1629<sub>(-26) | 1975<sub>(+19) | 2070<sub>(+52) |  |
| 1.2.2 | 2026-01-23 | 1655 | 1956 | 2018 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-10 06:36:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2264, 2835]
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2264, 2835]
  line "LTC (60.0+0.60s)" [1956, 1975, 2078, 2327, 2461, 2606, 3119]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2196, 2435, 2597, 2747, 3232]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2196, 2435, 2597, 2747, 3232]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2264, 2835]
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2264, 2835]
  line "LTC (60.0+0.60s)" [1956, 1975, 2078, 2327, 2461, 2606, 3119]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2196, 2435, 2597, 2747, 3232]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2196, 2435, 2597, 2747, 3232]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3232 | 32 | 268 | 51% | 3218 | 62% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3119 | 33 | 270 | 53% | 3085 | 53% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2835 | 31 | 322 | 50% | 2831 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2747 | 27 | 436 | 52% | 2730 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2606 | 31 | 328 | 49% | 2611 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2264 | 31 | 348 | 52% | 2248 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2597 | 34 | 280 | 50% | 2593 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2461 | 32 | 332 | 51% | 2449 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2167 | 35 | 288 | 49% | 2184 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2435 | 30 | 380 | 48% | 2454 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 37 | 252 | 52% | 2311 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2017 | 35 | 288 | 54% | 1976 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2196 | 36 | 264 | 49% | 2206 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2078 | 40 | 206 | 53% | 2056 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1763 | 43 | 180 | 51% | 1754 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2070 | 40 | 204 | 52% | 2055 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1975 | 46 | 164 | 51% | 1970 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1629 | 42 | 208 | 47% | 1655 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2018 | 38 | 260 | 46% | 2088 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1956 | 43 | 204 | 46% | 2020 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1655 | 41 | 232 | 47% | 1709 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |