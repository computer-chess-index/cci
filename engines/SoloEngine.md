# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2840<sub>(+new) | 3119<sub>(+new) | 3222<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2260<sub>(+97) | 2601<sub>(+144) | 2743<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2163<sub>(+149) | 2457<sub>(+135) | 2593<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2014<sub>(+254) | 2322<sub>(+248) | 2431<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1760<sub>(+133) | 2074<sub>(+103) | 2192<sub>(+125) |  |
| 1.3.1 | 2026-02-01 | 1627<sub>(-24) | 1971<sub>(+18) | 2067<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1651 | 1953 | 2016 |  |
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

Generated: 2026-07-16 06:28:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1651, 1627, 1760, 2014, 2163, 2260, 2840]
  line "STC (8.0+0.08s)" [1651, 1627, 1760, 2014, 2163, 2260, 2840]
  line "LTC (60.0+0.60s)" [1953, 1971, 2074, 2322, 2457, 2601, 3119]
  line "VLTC (2m24s+1.12s)" [2016, 2067, 2192, 2431, 2593, 2743, 3222]
  line "VLTC (2m24s+1.12s)" [2016, 2067, 2192, 2431, 2593, 2743, 3222]
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
  line "STC (8.0+0.08s)" [1651, 1627, 1760, 2014, 2163, 2260, 2840]
  line "STC (8.0+0.08s)" [1651, 1627, 1760, 2014, 2163, 2260, 2840]
  line "LTC (60.0+0.60s)" [1953, 1971, 2074, 2322, 2457, 2601, 3119]
  line "VLTC (2m24s+1.12s)" [2016, 2067, 2192, 2431, 2593, 2743, 3222]
  line "VLTC (2m24s+1.12s)" [2016, 2067, 2192, 2431, 2593, 2743, 3222]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3222 | 29 | 308 | 50% | 3217 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3119 | 32 | 286 | 53% | 3083 | 52% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2840 | 30 | 346 | 51% | 2830 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 27 | 436 | 52% | 2727 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2601 | 31 | 328 | 49% | 2606 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2260 | 31 | 348 | 52% | 2244 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2593 | 34 | 280 | 50% | 2589 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2457 | 32 | 332 | 51% | 2445 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2163 | 35 | 288 | 49% | 2180 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2431 | 30 | 380 | 48% | 2450 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 37 | 252 | 52% | 2306 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2014 | 35 | 288 | 54% | 1974 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2192 | 36 | 264 | 49% | 2202 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2074 | 40 | 206 | 53% | 2053 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1760 | 43 | 180 | 51% | 1751 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2067 | 40 | 204 | 52% | 2052 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1971 | 46 | 164 | 51% | 1966 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1627 | 42 | 208 | 47% | 1652 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2016 | 38 | 260 | 46% | 2084 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1953 | 43 | 204 | 46% | 2017 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1651 | 41 | 232 | 47% | 1706 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |